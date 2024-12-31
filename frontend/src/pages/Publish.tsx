import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { TextEditor } from "../components/TextEditor"
import { createBlogInputType } from "@tejasnavadkar/medium-common"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Publish = () => {

   const [postInput,setPostInput] = useState<createBlogInputType>({
    title:"",
    content:""
   })

  const navigate = useNavigate()

   async function createPost (){
     try {
        
        const response =  await axios.post(`${BACKEND_URL}/api/v1/blog/create`,postInput,{
            headers:{
                Authorization:"bearer " + localStorage.getItem('token')
            }
        })

        console.log("createPostResponse--",response.data)

        if(response.status == 200){
            navigate(`/blog/${response.data.id}`)
        }

        
     } catch (error) {
        
        console.log("err while creating post-------",error)
     }
    }

    return <div>
        <AppBar />
        
         <div className="flex flex-col items-center w-full">
         <div className="flex justify-center w-full">
            <div className="mb-6 w-full max-w-screen-lg ">
             <input onChange={e=>setPostInput({
                ...postInput,
                title:e.target.value
             })} type="text" className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"/>
            </div>
        </div>

        <div className="w-full max-w-screen-lg">
            <TextEditor onChange={e=>setPostInput({
                ...postInput,
                content:e.target.value
            })} />
            <div>
        <button onClick={createPost} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center me-2 mb-2">Publish Post</button>
        </div>
        </div>
         </div>
         
    </div>
}