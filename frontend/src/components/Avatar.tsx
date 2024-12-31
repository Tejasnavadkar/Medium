import React, { memo, useEffect, useState } from "react"


const AvatarComponent =({name,size}:{name:string,size?:"big" | "small"}) =>{
    const [initials,setInitials] = useState("")

  useEffect(()=>{
    const namearr = name.split(" ")
    console.log("namearr",namearr)
    if(namearr.length > 1){
        console.log("inside if")
       setInitials(namearr[0].toUpperCase().charAt(0) + namearr[1].toUpperCase().charAt(0))
    }else{
        setInitials(name?.toUpperCase().charAt(0))
    }
  },[])

   
    return  <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={` ${size === "small" ? "text-xs" : "text-sm"} text-gray-600 dark:text-gray-300`}>{initials}</span>
    </div>
    
}

export const Avatar = memo(AvatarComponent)