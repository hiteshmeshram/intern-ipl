import { useEffect, useState } from "react"
import { Header } from "./Header"
import axios from "axios"
import { BACKEND_URL } from "../utils/constants"
import { User } from "../utils/types"
import { Card } from "./Card"

export const Dashboard = () => {
    const [userData,setUserData] = useState<null | User>(null);
    async function inti() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setUserData(response.data.user);
        console.log(response.data.user)
    } 

    useEffect(()=>{
        inti()
    },[])

    if(!userData) {
        return <div>loading</div>
    }

    return <div>
        <div className="text-3xl flex justify-center mt-4">
          Welcome to {userData.team} fan store
        </div>
        <div className="flex mx-[10%] p-10">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
}