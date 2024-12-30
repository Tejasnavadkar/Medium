import { blogProp } from "../hooks"
import { Avatar } from "./Avatar"


//Taxing Laughter: The Joke Tax Chronicles
// Future of Wikipedia", cited a trend analysis concerning data published by the Wikimedia Foundation stating that "[t]he number of editors for the English-language version has fallen by a third in seven years
// The attrition rate for active editors in English Wikipedia was cited by The Economist as substantially in contrast to statistics for Wikipedia in other languages (non-English Wikipedia). The Economist reported that the number of contributors with an average of five or more edits per month was relatively constant since 2008 for Wikipedia in other languages at approximately 42,000 editors within narrow seasonal variances of about 2,000 editors up or down. The number of active editors in English Wikipedia, by "sharp" comparison, was cited as peaking in 2007 at approximately 50,
            
export const FullBlog = ({blog}:{blog:blogProp}) => {

    return <div className="grid grid-cols-3 gap-4 p-6 w-full border max-w-screen-xl">
        <div className="col-span-2 flex flex-col gap-3">
            <div className=" flex flex-col gap-3">
                <div className="font-extrabold text-4xl">{blog?.title}</div>
                <div className="font-medium text-gray-500">posted on August 24, 2023</div>
            </div>
            <div className="text-lg">
            {blog.content}   
            </div>
        </div>

        <div className="col-span-1 flex flex-col gap-4">
            <div className="font-semibold">Author</div>
            <div className="flex gap-2 items-center">
                <div>
                    <Avatar name={blog?.author.name || "Anonymous" } />
                </div>
               <div>
               <div className="font-bold text-2xl">{blog?.author.name || "Anonymous"}</div>
               <div className="text-slate-500 ">
                  Random catch phrase about author's ability to grab the users attention 
               </div>
               </div>
            </div>
        </div>

    </div>
}