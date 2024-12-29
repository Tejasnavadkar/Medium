import { Link, useNavigate } from "react-router-dom"
import { Input } from "./Input"
import { useState } from "react"
import { signupInputType } from '@tejasnavadkar/medium-common'
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth = ({type}:{type:"SignUp" | "SignIn"}) => {

    //    const [username,setUsername] = useState("")
    //    const [email,setEmail] = useState("")
    //    const [password,setPassword] = useState("")

   const navigate = useNavigate()

    const [postInputs, setPostInputs] = useState<signupInputType>({
        name: "",
        email: "",
        password: "",
    })

   async function sendRequest() {
       try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "SignUp" ? "signup" : "signin"}`,postInputs)
       const jwt = response.data.token
       localStorage.setItem('token',jwt)  // make it stringify
        navigate('/blog')

       } catch (error) {
         console.log("error while signup axios request",error)
       }
    }

    return <>

        <div className="h-screen flex flex-col justify-center items-center">

            <div className="flex flex-col w-80 gap-2" >
                <div className="flex flex-col gap-2 items-center">
                    <div className="font-bold text-3xl">
                        { type === "SignIn" ? "Login into account" : "Create an account"}
                    </div>
                    <div className="text-gray-600 font-medium">
                       {type === "SignIn" ? "Don't have an account?" : "Already have an account?" }<Link to={ type === "SignIn" ? "/signup" : "/signin"}>{ type === "SignIn" ? "SignUp" : "Login"}</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                  { type === "SignUp" ? <Input onChange={e => setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })} lable="Username" placeholder="Enter your username" /> : null}
                    <Input onChange={e => setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })} lable="Email" placeholder="m@example.com" />
                    <Input type="password" onChange={e => setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })} lable="Password" placeholder="password" />
                </div>

                <div>
                    <button onClick={sendRequest} type="button" className=" w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "SignUp" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>




        </div>

    </>
}