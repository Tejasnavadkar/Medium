import { AppBar } from "../components/AppBar"
import { TextEditor } from "../components/TextEditor"


export const Publish = () => {

    return <div>
        <AppBar />

         <div className="flex flex-col items-center w-full">
         <div className="flex justify-center w-full">
            <div className="mb-6 w-full max-w-screen-lg ">
             <input type="text" className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"/>
            </div>
        </div>

        <div className="w-full max-w-screen-lg">
            <TextEditor/>
        </div>
         </div>
    </div>
}