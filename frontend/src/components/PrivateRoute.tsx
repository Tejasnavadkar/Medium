
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Spinner } from "./Spinner"

export const PrivateRoute = () =>{
    const [isAuthenticated,setIsAuthenticated] = useState<boolean | null>(null)
    const navigate = useNavigate()

    useEffect(()=>{
       const token = localStorage.getItem('token')
       if(token){
        setIsAuthenticated(true)
       }else{
        setIsAuthenticated(false)
       }
    },[])

    useEffect(() => {
        if (isAuthenticated === false) {
          navigate('/');
        }
      }, [isAuthenticated, navigate]);
    

    if(isAuthenticated == null){
        return <div className="flex justify-center items-center">
            <Spinner/>
        </div>
    }

    return <Outlet/>
}