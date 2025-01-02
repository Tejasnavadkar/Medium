import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { AppBar } from "../components/AppBar"
import { Spinner } from "../components/Spinner"
import { useRecoilValueLoadable } from "recoil"
import { getBlogPost } from "../Store/atoms"




export function Blog() {
    const { id } = useParams()
    const blog = useRecoilValueLoadable(getBlogPost(id))
    // const { isloading, blog } = useBlog({
    //     id: id || ""
    // })
    console.log("recoilBlog--",blog)

    if (blog.state === 'loading' || !blog) {
        return <>
          <div className="max-h-screen">
          <AppBar/>
          <Spinner/>
          </div>

           
        </>
    }


    return <>
        <div className="">
            <AppBar />
            <div className="flex justify-center">
                <FullBlog blog={blog?.contents} />
            </div>
        </div>



    </>
}