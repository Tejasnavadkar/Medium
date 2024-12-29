import { Avatar } from "./Avatar"


export const AppBar = () =>{

    return <div className="flex justify-between items-center px-4 py-2 mb-6 border-b border-slate-200 ">
        <div className="font-bold">Medium</div>
        <div>
            <Avatar name="Tejas Navadkar" size="big"/>
        </div>
    </div>
}