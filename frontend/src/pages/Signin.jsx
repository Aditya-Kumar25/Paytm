import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/InputBox";
import { Subtitle } from "../components/Subtitle";
import {useNavigate} from "react-router-dom"
import axios from "axios";


export const Signin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <Subtitle subtitle={"Jankari bhare account Banae k liye"}/>
            
              <Inputbox onChange={(e)=>{setEmail(e.target.value)}} placeholder={"Email"} label={"Email"}/>
               <Inputbox onChange={(e)=>{setPassword(e.target.value)}}  placeholder={"Password"} label={"Password"}/>
               <div>
                    <Button onClick={
                      async () => {
                        const response = await axios.post("http://localhost:3000/app/v1/user/signin",{
                          email,
                          password
                        });
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                      }
                    }  label={"Sign in"}/>
               </div>
               <BottomWarning label={"Don't Have an Account?"} buttonText={"Signup"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
