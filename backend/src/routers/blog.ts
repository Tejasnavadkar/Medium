import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import {createBlogInput,updateBlogInput} from '@tejasnavadkar/medium-common'

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        user_id:string;
    }
}>()

blogRouter.use('/*', async (c,next)=>{

try {
    const bearer = c.req.header('Authorization') || ""
    const token = bearer?.split(" ")[1]
    if(!token){
      c.status(403)
      return c.json({err:"token not found"})
    }
  
    const decode = await verify(token,c.env.JWT_SECRET)
    if(decode.id){
     
    c.set("user_id",String(decode.id))

    await next()
    } else{
        c.status(403);
        return c.json({msg:"not authenticated"})
    }
  
} catch (error) {
    console.log("error in authmiddlwere")
    return c.json({err:error})
}
})


  
blogRouter.get('/bulk',async (c)=>{

  try {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   const blogs = await prisma.blog.findMany({
    select:{
        id:true,
        title:true,
        content:true,
        author:{
            select:{
                name:true,
                id:true
            }
        }
    },
    // include:{  // all author details
    //     author:true
    // }
   })
    return c.json({allBlogs:blogs})

  } catch (error) {
    console.log("error while fetching all todos",error)
    c.status(411)
    return c.json({msg:"error while fetching all todos"})
  }
  })
  

  
  blogRouter.post('/create',async (c)=>{

    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
       const body = await c.req.json()

        const {success} = createBlogInput.safeParse(body)
     
         if(!success){
           c.status(411)
           return c.json({err:"createBlog inputs not correct"})
         }

       const authorId = c.get('user_id')
       const createdBlog = await prisma.blog.create({
            data:{
                title:body.title,
                content:body.content,
                author_id:parseInt(authorId)
            }
        })
    
        return c.json({
            msg:"post created",
            id:createdBlog.id
        })
        
    } catch (error) {
        console.log("err while create blog",error)
        return c.json({err:error})
    }
  })

   blogRouter.get('/userPosts',async (c)=>{

  try {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const userId = c.get('user_id')

   const usersposts = await prisma.blog.findMany({
        where:{
            author_id:parseInt(userId)
        },
        include:{
            author:true
        }
    })

    if(usersposts){
        return c.json({userpost:usersposts})
    }



  } catch (error) {
    console.log('err while getting specific usersPosts',error)
    return c.json({er:error})
  }

  })

  blogRouter.get('/:id', async (c)=>{
   try {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = parseInt(c.req.param('id'))

  const blog = await prisma.blog.findUnique({
    where:{
        id:id
    },
    select:{
        id:true,
        title:true,
        content:true,
        author_id:true,
        author:{
            select:{
                name:true
            }
        }
    }
   })

    if(!blog){
        c.status(401)
        return c.json({msg:"blog not found"})
    }

    return c.json({blog:blog},
    )
   } catch (error) {

    c.status(411)
    return c.json({msg:"error while get blog"})
    
   }
  })

  blogRouter.put('/update',async (c)=>{

    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
       const body = await c.req.json()

       const {success} = updateBlogInput.safeParse(body)
     
       if(!success){
         c.status(411)
         return c.json({err:"updateBlog inputs not correct"})
       }

       const updatedBlog = await prisma.blog.update({
        where:{
            id:body.id
        },
            data:{
                title:body.title,
                content:body.content,    
            }
        })
    
        return c.json({
            msg:"post updated",
            id:updatedBlog.id
        })
        
    } catch (error) {
        console.log("err while updating blog",error)
        return c.json({err:error})
    }
  })


 
  
  

