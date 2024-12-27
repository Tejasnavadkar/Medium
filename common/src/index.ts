import z  from 'zod'

export const signupInput = z.object({  // for backend
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string()
})

export const signinInput = z.object({  // for backend
    email:z.string().email(),
    password:z.string()
})


export const createBlogInput = z.object({  // for backend
    title:z.string(),
    content:z.string()
})


export const updateBlogInput = z.object({  // for backend
    title:z.string(),
    content:z.string(),
    id:z.number()
})



export type signupInputType = z.infer<typeof signupInput>   // for frontend
export type signinInputType = z.infer<typeof signinInput>   // for frontend
export type createBlogInputType = z.infer<typeof createBlogInput>   // for frontend
export type updateBlogInputType = z.infer<typeof updateBlogInput>   // for frontend

