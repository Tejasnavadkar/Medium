import { blogProp } from "../hooks"
import { Avatar } from "./Avatar"


           
export const FullBlog = ({blog}:{blog:blogProp}) => {

    return <div className="grid grid-cols-3 gap-4 p-6 w-full border max-w-screen-xl">
        <div className="col-span-2 flex flex-col gap-3">
            <div className=" flex flex-col gap-3">
                <div className="font-extrabold text-4xl">{blog?.title}</div>
                <div className="font-medium text-gray-500">posted on August 24, 2023</div>
            </div>
            <div className="text-lg">
            {blog?.content}   
            </div>
        </div>

        <div className="col-span-1 flex flex-col gap-4">
            <div className="font-semibold">Author</div>
            <div className="flex gap-2 items-center">
                <div>
                    <Avatar name={blog?.author?.name || "Anonymous" } />
                </div>
               <div>
               <div className="font-bold text-2xl">{blog?.author?.name || "Anonymous"}</div>
               <div className="text-slate-500 ">
                  Random catch phrase about author's ability to grab the users attention 
               </div>
               </div>
            </div>
        </div>

    </div>
}