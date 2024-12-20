import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton"
import { useState } from "react";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSignin() {
        const response =await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
            email,
            password
        })
        const data = response.data;
        console.log(email,password)
        localStorage.setItem('token',data.token);
        navigate('/dashboard');
    }

    return <div className="flex justify-center pt-28 bg-slate-600 bg-gradient-to-t from-white ">
        <div className="w-1/5 border border-black  p-4 pt-8 rounded-md shadow-lg">
            <div className="w-full mt-2">
                <div className='font-bold'>Email</div>
                <Input type='text' placeholder="Email" onChange={(value)=>{
                setEmail(value);
            }}/>
            </div>
            <div className="w-full mt-2">
                <div className='font-bold'>Password</div>
                <Input type='text' placeholder="Email" onChange={(value)=>{
                setPassword(value);
            }}/>
            </div>
            
            <div className="flex justify-center mt-5">
               <PrimaryButton onClick={handleSignin}>SIGNIN</PrimaryButton>
            </div>
            <div className="mt-4">
                Don't have an account ? <a className="underline" href="http://localhost:5173/signup">signup to Register</a>
            </div>
        </div>
    </div>
}