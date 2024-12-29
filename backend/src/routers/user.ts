import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import{signupInput,signinInput} from '@tejasnavadkar/medium-common'


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>()


userRouter.post('/signup',async (c)=>{

    try {
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      
    const body = await c.req.json()

    const {success} = signupInput.safeParse(body)

    if(!success){
      c.status(411)
      return c.json({err:"signup inputs not correct"})
    }
    const createdUser =await prisma.user.create({
     data:{
       name:body.name,
       email:body.email,
       password:body.password
     }
    })
    
    if(!createdUser){
      c.status(411)
      return c.text('user not created')
    }
    
    const jwt = await sign({id:createdUser.id,email:createdUser.email},c.env.JWT_SECRET)
    return c.json({msg:"user created",token:jwt})
    
    } catch (error) {
      console.log("error while signup",error)
      c.status(411)
      return c.json({error:error})
    }
    
    })


    
    userRouter.post('/signin',async (c)=>{
      
      const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
      }).$extends(withAccelerate())
    
      const body = await c.req.json()

      const {success} = signinInput.safeParse(body)

      if(!success){
        c.status(411)
        return c.json({err:"signin inputs not correct"})
      }
    
      const user = await prisma.user.findUnique({
        where:{
          // name:body.name,
          email:body.email,
          password:body.password
        }
      })
    
      if(!user){
        c.status(403)
        return c.json({msg:"incorrect credentials"})
      }
    
     const token = await sign({id:user.id,email:user.email},c.env.JWT_SECRET)
    
     return c.json({token:token})
    })
    
    