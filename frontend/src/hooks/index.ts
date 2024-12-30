import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

 export type blogProp={
    id:number
    title:string,
    content:string,
    author_id?:number
    author:{
     name:string
    }
}

export const useBlog = ({id}:{id:string}) =>{

    const [isloading,setLoading] = useState(true)
   const [blog,setBlog] =useState<blogProp>()

   const fetchBlogs = async () =>{
    console.log("fetchblogs")
    console.log("token----","bearer" + localStorage.getItem('token'))
      
   try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
            Authorization:"bearer " + localStorage.getItem('token')
        }
    })

    if(response.data){
        console.log("allblogs",response.data.blog)
        setBlog(response.data.blog)
        setLoading(false)
    }

   } catch (error) {
    console.log("err while fetching all blogs",error)
   }

   }

   useEffect(()=>{
    fetchBlogs()
   },[])

   return {
    isloading,
    blog
   }

}

export const useBlogs = () =>{
   const [isloading,setLoading] = useState(true)
   const [blogs,setBlogs] =useState<blogProp[]>([])

   const fetchBlogs = async () =>{
    console.log("fetchblogs")
    console.log("token----","bearer" + localStorage.getItem('token'))
      
   try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:"bearer " + localStorage.getItem('token')
        }
    })

    if(response.data){
        console.log("allblogs",response.data.allBlogs)
        setBlogs(response.data.allBlogs)
        setLoading(false)
    }

   } catch (error) {
    console.log("err while fetching all blogs",error)
   }

   }

   useEffect(()=>{
    fetchBlogs()
   },[])

   return {
    isloading,
    blogs
   }


}

