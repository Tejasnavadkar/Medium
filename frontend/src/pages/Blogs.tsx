import { useRecoilValueLoadable } from "recoil"
import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { blogProp } from "../hooks"
import { getAllBlogs } from "../Store/atoms"



export const Blogs = () =>{

    // const {isloading,blogs} = useBlogs()

    const blogs = useRecoilValueLoadable(getAllBlogs)

    if(blogs.state === 'loading' ){
        return <div> 
            <AppBar/>
            <div className="h-screen flex flex-col justify-center items-center" >
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>
        </div>
    }

    return <>
    
     <div className="">
        <div>
            <AppBar/>
        </div>
       <div className="flex justify-center">
       <div className="flex flex-col gap-10   "> {/*w-[576px]*/}
            {blogs.contents?.map((blog:blogProp)=>(<BlogCard 
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={"21/jan/2024"}
            />))}
            {/* <BlogCard 
            authorName={"Tejas Navadkar"}
            title={"How an ugly single page website make $5,000 a mounth with affilate marketing"}
            content={"not need to create fancy and modern website with hundred of pages to make money online for man not need to create fancy and modern website with hundred of pages to make money online for man   "}
            publishedDate={"21/jan/2024"}
            /> */}
           
        </div>
       </div>
     </div>



    </>
}