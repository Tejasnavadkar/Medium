import { Link} from "react-router-dom"
import UserProfileDropdown from "./UserProfileDropdown"


export const AppBar = () => {
 
//    const navigate = useNavigate()

//    const user = JSON.parse(localStorage.getItem('user') || '{}')
    // const Logout = () =>{
    //     localStorage.clear()
    //     navigate('/')
       
    // }

    return <div className="flex justify-between items-center px-4 py-2 mb-6 border-b border-slate-200 ">
        <div className="font-bold">
            <Link to={'/blogs'}>
                Medium
            </Link>
        </div>
        <div className="flex gap-2">
           {/* <div>
            <UserProfileDropdown/>
           </div> */}
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full mr-4 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
            </Link>
            {/* <Avatar name={user?.name || "anonymous"} size="big" /> */}
            <div>
            <UserProfileDropdown/>
           </div>
           {/* <div>
           <button onClick={Logout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
           </div> */}
          

        </div>
    </div>
}