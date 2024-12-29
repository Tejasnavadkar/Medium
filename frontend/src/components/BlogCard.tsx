import { Avatar } from "./Avatar"
import { Dot } from "./dot"


type BlogProps = {
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
 }

 export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
 }:BlogProps) =>{

    return <div className="flex flex-col gap-2 border-b border-slate-200 p--4">

      <div className="flex items-center gap-2 ">
         <Avatar name={authorName} size="small"/>
         <div className=" font-medium text-sm">
         {authorName} 
         </div>
         <div>
            <Dot/>
         </div>
         <div className="font-medium text-slate-400  text-sm">
          {publishedDate}
         </div>
      </div>

      
      <div className="font-semibold text-2xl">
         {title}
      </div>

      <div className=" font-normal text-slate-700 text-base">
          {content.length > 100 ? content.slice(0,100) + "..." : content}
      </div>

      <div className="text-slate-500 text-sm">
         {`${Math.ceil(content.length/100)} min read`}
      </div> 
      
    </div>
}