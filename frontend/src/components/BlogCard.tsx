import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import { Dot } from "./Dot"


type BlogProps = {
   id:number
   authorName: string,
   title: string,
   content: string,
   publishedDate: string
}

export const BlogCard = ({
   id,
   authorName,
   title,
   content,
   publishedDate
}: BlogProps) => {

   return <Link to={`/blog/${id}`}>
      <div className="flex flex-col gap-2 border-b border-slate-200 p-4 w-screen max-w-screen-md">

         <div className="flex items-center gap-2 ">
            <Avatar name={authorName} size="small" />
            <div className=" font-medium text-sm">
               {authorName}
            </div>
            <div>
               <Dot />
            </div>
            <div className="font-medium text-slate-400 text-xs">
               {publishedDate}
            </div>
         </div>


         <div className="font-semibold text-2xl">
            {title}
         </div>

         <div className=" font-normal text-slate-700 text-base">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
         </div>

         <div className="text-slate-500 text-sm">
            {`${Math.ceil(content.length / 100)} min read`}
         </div>

      </div>
   </Link>
}