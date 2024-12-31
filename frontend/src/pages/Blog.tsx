import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { blogProp, useBlog } from "../hooks"
import { AppBar } from "../components/AppBar"
import { Spinner } from "../components/Spinner"




export function Blog() {
    const { id } = useParams()
    const { isloading, blog } = useBlog({
        id: id || ""
    })

    if (isloading || !blog) {
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
                <FullBlog blog={blog} />
            </div>
        </div>



    </>
}