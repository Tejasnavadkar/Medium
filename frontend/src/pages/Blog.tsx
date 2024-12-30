import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { blogProp, useBlog } from "../hooks"
import { AppBar } from "../components/AppBar"




export function Blog(){
   const {id} = useParams()
   const {isloading,blog} = useBlog({
    id:id || ""
   })

if(isloading){
    return <div className="h-screen flex justify-center items-center" >
    Loading....
</div>
}
    return <>
    <div className="">
        <AppBar/>
     <div className="flex justify-center">
       <FullBlog blog={blog} />
     </div>
    </div>
        


    </>
}