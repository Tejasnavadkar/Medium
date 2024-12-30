import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import {createBlogInputType} from '@tejasnavadkar/medium-common'

export const TextEditor = () =>{

//    const [postInput,setPostInput] = useState<createBlogInputType>({
//     title:"",
//     content:""
//    })

//    async function createPost (){
//         await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{},{
//             headers:{
//                 Authorization:"bearer " + localStorage.getItem('token')
//             }
//         })
//     }

    return <>
      <div className="mt-2 w-full">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <textarea  id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
        <div>
        <button onClick={createPost} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center me-2 mb-2">Publish Post</button>
        </div>
       </div>
    </div>
    </>
    
}