import { Link } from "react-router-dom"
import { Input } from "./Input"
import { useState } from "react"
import { signupInputType } from '@tejasnavadkar/medium-common'


export const Auth = ({type}:{type:"SignUp" | "SignIn"}) => {

    //    const [username,setUsername] = useState("")
    //    const [email,setEmail] = useState("")
    //    const [password,setPassword] = useState("")

    const [signupInputs, setSignupInputs] = useState<signupInputType>({
        name: "",
        email: "",
        password: "",
    })

    return <>

        <div className="h-screen flex flex-col justify-center items-center">

            <div className="flex flex-col w-80 gap-2" >
                <div className="flex flex-col gap-2 items-center">
                    <div className="font-bold text-3xl">
                        Create an account
                    </div>
                    <div className="text-gray-600 font-medium">
                        Already have an account? <Link to={"/signin"}>Login</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Input onChange={e => setSignupInputs({
                        ...signupInputs,
                        name: e.target.value
                    })} lable="Username" placeholder="Enter your username" />
                    <Input onChange={e => setSignupInputs({
                        ...signupInputs,
                        email: e.target.value
                    })} lable="Email" placeholder="m@example.com" />
                    <Input type="password" onChange={e => setSignupInputs({
                        ...signupInputs,
                        password: e.target.value
                    })} lable="Password" placeholder="password" />
                </div>

                <div>
                    <button type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
                </div>
            </div>




        </div>

    </>
}