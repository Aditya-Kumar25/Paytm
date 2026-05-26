import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/InputBox";
import { Subtitle } from "../components/Subtitle";
import {useNavigate} from "react-router-dom"


export const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <Subtitle subtitle={"Jankari bhare account Banae k liye"}/>
            
              <Inputbox  placeholder={"Email"} label={"Email"}/>
               <Inputbox  placeholder={"Password"} label={"Password"}/>
               <div>
                    <Button label={"Sign up"}/>
               </div>
               <BottomWarning label={"Don't Have an Account?"} buttonText={"Signup"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
