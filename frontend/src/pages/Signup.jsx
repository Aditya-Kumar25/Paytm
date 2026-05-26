import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/InputBox";
import { Subtitle } from "../components/Subtitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username,setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <Subtitle subtitle={"Jankari bhare account Banae k liye"} />
          <Inputbox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"First Name"}
            label={"Firstname"}
          />
          <Inputbox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"Last Name"}
            label={"Lastname"}
          />
          <Inputbox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder={"Username"}
            label={"Username"}
          />
          <Inputbox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={"Email"}
            label={"Email"}
          />
          <Inputbox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"Password"}
            label={"Password"}
          />
          <div>
            <Button
              onClick={async () => {
                const response =await axios.post("http://localhost:3000/app/v1/user/signup", {
                  username,
                  firstname,
                  lastname,
                  email,
                  password,
                });
                localStorage.setItem("token",response.data.token)
                navigate("/dashboard")
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Signin"}
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};
