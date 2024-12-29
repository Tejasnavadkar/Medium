import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";


 export function SignIn(){
    return <>
    
    <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div>
           <Auth type="SignIn"/>
        </div>
        <div className="hidden lg:block">
          <Quote/>
        </div>
    </div>

    </>
}