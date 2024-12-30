import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"


export const AppBar = () => {

    return <div className="flex justify-between items-center px-4 py-2 mb-6 border-b border-slate-200 ">
        <div className="font-bold">
            <Link to={'/blogs'}>
                Medium
            </Link>
        </div>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full mr-4 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>

            </Link>
            <Avatar name="Tejas Navadkar" size="big" />
        </div>
    </div>
}