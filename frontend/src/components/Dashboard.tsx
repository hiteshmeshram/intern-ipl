import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../utils/constants"
import { Product, User } from "../utils/types"
import { Card } from "./Card"
import { PrimaryButton } from "./PrimaryButton"
import { useNavigate } from "react-router-dom"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./Input"




export const Dashboard = () => {
    const navigate = useNavigate();
    const [ userData,setUserData ] = useState<null | User>(null);
    const [ products,setProducts ] = useState<Product[] | null>(null);
    const [color,setColor] = useState('')
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('');
    const [imageurl,setImageUrl] = useState('')

    async function inti() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setUserData(response.data.user);
        setColor(response.data.user.color.toLowerCase())
        console.log(`bg-${response.data.user.color.toLowerCase()}-50`)

        const products = await axios.get(`${BACKEND_URL}/api/v1/product/${response.data.user.team}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setProducts(products.data.products);       
    } 

    useEffect(()=>{
        inti()
    },[])


    if(!userData) {
            return <div>loading</div>
    }

    if(userData.role === 'ADMIN') {
        async function addProducts() {
            const response = await axios.post(`${BACKEND_URL}/api/v1/product/add`,{
                
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            alert("product added successfully")
        }
        return <div className="bg-blue-600 bg-gradient-to-t from-white h-screen pt-5">
            <div className="flex justify-center mt-4"><span className="text-3xl mr-32">welcome to Admin Dashboard</span>
                <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-black text-white px-4 py-2 shadow-md rounded-lg">add Products</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Add Products</DialogTitle>
                    
                    </DialogHeader>
                    <div>
                        Name
                        <Input type='text' placeholder='Name' onChange={(value)=>{
                            setName(value)
                        }}/>
                        Description
                        <Input type='text' placeholder='Name' onChange={(value)=>{
                            setDescription(value)
                        }}/>
                        Price
                        <Input type='text' placeholder='Name' onChange={(value)=>{
                            setPrice(value)
                        }}/>
                        Imageurl
                        <Input type='text' placeholder='Name' onChange={(value)=>{
                            setImageUrl(value)
                        }}/>
                    </div>
                    <DialogFooter>
                   <button onClick={addProducts}>add </button>
                    </DialogFooter>
                </DialogContent>
                </Dialog>
  
            </div>

                
        </div>
    }

    return <div className={`bg-${color}-600  h-screen bg-gradient-to-b from-white bg-${userData.color}-50`}> 
        <div className="text-3xl flex justify-center pt-8">
             Welcome to {userData.team} fan store
        </div>
        <div className="flex mx-[10%] p-10">

            {products?.map(product => {
                return <Card key={product.id} product={product}/>
            })}
            
        </div>
    </div>
}