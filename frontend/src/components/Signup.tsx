import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton"
import { useState } from "react";
import { Input } from "./Input";
import { BACKEND_URL, constants } from "../utils/constants";
import axios from "axios";

export const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [color,setColor] = useState("");
    const navigate = useNavigate();

    async function handleSignup() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            name,
            email,
            password,
            color
        })

        const data = response.data;
        localStorage.setItem('token',data.token);
        navigate('/dashboard');
    }

    return <div className="flex justify-center pt-28 bg-gray-500 bg-gradient-to-t from-white">
            <div className="w-1/5 border border-black p-4 pt-8 rounded-md shadow-lg">

                <div className="w-full mt-2">
                    <div>Name</div>
                <Input type='text' placeholder="Name" onChange={(value)=>{
                    setName(value);
                }}/>
                </div>

                <div className="w-full mt-2">
                    <div>Email</div>
                    <Input type='text' placeholder="Email" onChange={(value)=>{
                    setEmail(value);
                }}/>
                </div>

                <div className="w-full mt-2">
                    <div>Password</div>
                    <Input type='password' placeholder="Password" onChange={(value)=>{
                    setPassword(value);
                }}/>
                </div>

                <div className="w-full mt-2">
                    <div>City</div>
                    <select onChange={(e)=>{
                        setColor(e.target.value)
                    }} className="w-full py-2 border mt-2 text-gray-500 rounded-md">
                        {constants.map(c=>{
                            return <option value={c}>{c}</option>
                        })}
                    </select>
                </div>

                <div className="flex justify-center mt-5">
                <PrimaryButton onClick={handleSignup}>SIGNUP</PrimaryButton>
                </div>

                <div className="mt-4">
                    Already have an account ? <a className="underline " href="http://localhost:5173/signin">signin to continue</a>
                </div>
        </div>
    </div>
}