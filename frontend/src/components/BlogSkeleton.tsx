import { AppBar } from "./AppBar"
import { Dot } from "./Dot"


export const BlogSkeleton = () =>{

    
    return <>
    
     <div className="flex flex-col gap-2 border-b border-slate-200 p-4 w-screen max-w-screen-md">
      
             <div className="flex items-center gap-2  ">
             <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className=" font-medium text-sm">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                </div>
                <div className="" >
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                </div>
                <div className="font-medium text-slate-400 text-xs">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                </div>
             </div>
    
    
             <div className="font-semibold text-2xl">
             <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
             </div>
    
             <div className=" font-normal text-slate-700 text-base">
             <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
             </div>
    
             <div className="text-slate-500 text-sm">
             <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
             <span className="sr-only">Loading...</span>
             </div>
    
          </div>
    
    
    
     {/* <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
    </div> */}
    </>
}