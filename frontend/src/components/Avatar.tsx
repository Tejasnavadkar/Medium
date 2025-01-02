import { memo, useEffect, useState } from "react"


const AvatarComponent =({name,size}:{name:string,size?:"big" | "small"}) =>{
    const [initials,setInitials] = useState("")
    

  useEffect(()=>{
    const namearr = name.split(" ")
    
    if(namearr.length > 1){
        console.log("inside if")
       setInitials(namearr[0].toUpperCase().charAt(0) + namearr[1].toUpperCase().charAt(0))
    }else{
        setInitials(name?.toUpperCase().charAt(0))
    }
  },[])



  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const user = JSON.parse(localStorage.getItem('user') || '{}')

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

   
    return<>  <div /*onClick={toggleDropdown}*/ className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span  className={` ${size === "small" ? "text-xs" : "text-sm"} text-gray-600 dark:text-gray-300`}>{initials}</span>
    </div>

     {/* Dropdown menu
     {isDropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-11 right-1 "
        >
          <div className="px-4 py-3 text-sm text-gray-900 ">
            <div>{user.name}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
              Sign out
            </a>
          </div>
        </div>
      )} */}

    </>
    
}

export const Avatar = memo(AvatarComponent)