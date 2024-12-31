import axios from "axios"
import { ChangeEvent } from "react"
// import { BACKEND_URL } from "../config"
// import { useState } from "react"
// import {createBlogInputType} from '@tejasnavadkar/medium-common'

type TextEditorProps ={
    onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void

}

export const TextEditor = ({onChange}:TextEditorProps) =>{

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
                <textarea onChange={onChange}  id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       
       </div>
    </div>
    </>
    
}