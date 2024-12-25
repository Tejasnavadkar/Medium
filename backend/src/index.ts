import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'



const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()


app.post('/api/v1/user/signup',async (c)=>{

try {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  
const body = await c.req.json()
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

app.post('/api/v1/user/signin',async (c)=>{
  
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const user = await prisma.user.findUnique({
    where:{
      email:body.email
    }
  })

  if(!user){
    c.status(403)
    return c.json({msg:"incorrect credentials"})
  }

 const token = await sign({id:user.id,email:user.email},c.env.JWT_SECRET)

 return c.json({token:token})

  
  
})




app.get('/api/v1/blog/bulk',(c)=>{
  c.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  console.log('hiii from - /api/v1/blog/bulk');
  return c.text('get all blogs')
})

app.post('/api/v1/blog',(c)=>{
  return c.text('creat blog')
})

app.put('/api/v1/blog',(c)=>{
  return c.text('update blog')
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.text('get blog')
})



export default app
