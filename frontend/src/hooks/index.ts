import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"


export const useBlogs = () =>{
   const [isloding,setLoding] = useState(true)
   const [blogs,setBlogs] =useState([])

   const fetchBlogs = async () =>{
      
   try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:"bearer" + localStorage.getItem('token')
        }
    })

    if(response){
        console.log("allblogs",response.data.allBlogs)
        setBlogs(response.data.allBlogs)
        setLoding(false)
    }

   } catch (error) {
    console.log("err while fetching all blogs",error)
   }

   }

   useEffect(()=>{

   },[])

   return {
    isloding,
    blogs
   }


}