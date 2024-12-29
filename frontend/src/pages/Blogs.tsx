import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"


export const Blogs = () =>{

    return <>
    
     <div className="">
        <div>
            <AppBar/>
        </div>
       <div className="flex justify-center">
       <div className="flex flex-col gap-10 max-w-xl ">
            <BlogCard 
            authorName={"Tejas Navadkar"}
            title={"How an ugly single page website make $5,000 a mounth with affilate marketing"}
            content={"not need to create fancy and modern website with hundred of pages to make money online for man not need to create fancy and modern website with hundred of pages to make money online for man   "}
            publishedDate={"21/jan/2024"}
            />
             <BlogCard 
            authorName={"Tejas Navadkar"}
            title={"How an ugly single page website make $5,000 a mounth with affilate marketing"}
            content={"not need to create fancy and modern website with hundred of pages to make money online for man not need to create fancy and modern website with hundred of pages to make money online for man   "}
            publishedDate={"21/jan/2024"}
            />
             <BlogCard 
            authorName={"Tejas Navadkar"}
            title={"How an ugly single page website make $5,000 a mounth with affilate marketing"}
            content={"not need to create fancy and modern website with hundred of pages to make money online for man not need to create fancy and modern website with hundred of pages to make money online for man   "}
            publishedDate={"21/jan/2024"}
            />
             <BlogCard 
            authorName={"Tejas Navadkar"}
            title={"How an ugly single page website make $5,000 a mounth with affilate marketing"}
            content={"not need to create fancy and modern website with hundred of pages to make money online for man not need to create fancy and modern website with hundred of pages to make money online for man   "}
            publishedDate={"21/jan/2024"}
            />
        </div>
       </div>
     </div>



    </>
}