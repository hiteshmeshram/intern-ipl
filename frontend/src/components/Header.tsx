import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
import { User } from "../utils/types";
import {  useRecoilValue } from "recoil";
import { lengthSelector } from "../store/selectors";

export const Header = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState<null | User>(null);
    const length = useRecoilValue(lengthSelector);

    async function init() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        setUserData(response.data.user);      
    }

    useEffect(()=>{
        init();
        
    },[])

    return <div className="flex justify-between w-full p-2   items-center ">
        <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaa5z2Fc2-BeTLb8pgQ_7NYMAM1E_rhha29Q&s" className="w-20 ml-4"></img>
        </div>
        <div className="items-center"> 
            {!userData?.email && <div>
                <PrimaryButton onClick={()=>{
                    navigate('/signup')
                }}>SIGNUP</PrimaryButton>
                <PrimaryButton onClick={()=>{
                    navigate('/signin')
                }}>SIGNIN</PrimaryButton>
            </div>}
            
            {userData?.email && <div>
                <PrimaryButton onClick={()=>{
                  
                  navigate('/cart')
              }}>CART ({length})</PrimaryButton>

                <PrimaryButton onClick={()=>{
                        localStorage.setItem('token',"");
                        setUserData(null);
                        navigate('/')
                    }}>SIGNOUT</PrimaryButton>
                    
            </div>}

        </div>
    </div>
}