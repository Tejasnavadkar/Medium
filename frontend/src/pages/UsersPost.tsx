
import { useRecoilValueLoadable } from "recoil"
import { getUsersBlog } from "../Store/atoms"
import { AppBar } from "../components/AppBar"
import { Spinner } from "../components/Spinner"
import { BlogCard } from "../components/BlogCard"
import { blogProp } from "../hooks"



export const UsersPost = () => {


    //get api response from recoil state
    const userBlogs = useRecoilValueLoadable(getUsersBlog)


    //loader
    if (userBlogs.state === 'loading' || !userBlogs.contents) {
        return <div className="max-h-screen">
            <AppBar />
            <Spinner />
        </div>
    }
// console.log("userBlogs.contents.userpost---",userBlogs.contents)
    if (!userBlogs.contents) {
        return <>
            <AppBar />
            <div className=" h-screen flex flex-col w-full justify-center items-center" >

                <div className="font-bold text-2xl" >
                    No Blogs..
                </div>
            </div>
        </>
    }
    return <>
        <AppBar />
        <div className="flex justify-center">
            <div className="flex flex-col gap-10 ">
                {userBlogs.contents.map((blog: blogProp) => (
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        authorName={blog?.author?.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"21/jan/2024"}
                    />

                ))}
            </div>
        </div>
    </>
}