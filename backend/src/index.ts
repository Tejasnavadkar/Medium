import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { userRouter } from './routers/user'
import { blogRouter } from './routers/blog'
import { cors } from 'hono/cors'



const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

app.use('/*',cors())

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)





export default app
