import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/extension'



const app = new Hono()

app.get('/', async(c) => {





  return c.text('Hello Hono!')
})

app.post("/api/v1/signup",async(c)=>{
  
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const res = await prisma.User.create({
    data:{
      email:body.email,
      password:body.password
    }
  })
  
  return c.text('hello mam')
})

app.post("/api/v1/signin",(c)=>{
  return c.text("jj")
})

app.post("/api/v1/blog",(c)=>{
  return c.text("hfh")
})


app.put("/api/v1/blog/:id",(c)=>{
  return c.text("jdjd")
})

app.get("/api/v1/blog/:id",(c)=>{
  return c.text("dhdh")
})


export default app
