import { BACKEND_URL } from "@/utils/constants";
import { User } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

export  function useMe() {
    const [user,setUser] = useState<User>();

    async function fetchUserData() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setUser(response.data.user);    
    }
    
    useEffect(()=>{
        fetchUserData();
    })

    if(user)
    return user;
}