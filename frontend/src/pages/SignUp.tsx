import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";


 export function SignUp(){
    return <>
    
    <div className="grid grid-cols-2">
        <div>
           <Auth type="SignUp"/>
        </div>
        <div className="hidden lg:block">
          <Quote/>
        </div>
    </div>

    </>
}