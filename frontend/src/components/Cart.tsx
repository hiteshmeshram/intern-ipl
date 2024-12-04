import { useRecoilState, useRecoilValue } from "recoil"
import { productAtom } from "../store/productAtom"
import { totalSelector } from "../store/selectors";
import { PrimaryButton } from "./PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/utils/constants";

export const Cart = () => {
    
    const [products,setProducts] = useRecoilState(productAtom);
    const total = useRecoilValue(totalSelector);
    const [color,setColor] = useState("")

    async function init() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setColor(response.data.user.color.toLowerCase());
       
    }

    useEffect(()=>{
        init()
    },[])


    function handleRemoveItem(id: number) {
        const itemsAfterRemove = products.filter((p)=>p.id !==id);
        setProducts(itemsAfterRemove);
    }

    function handlePlaceorder() {
        
    }

    return <div className={`px-[5%] bg-${color}-600 bg-gradient-to-b from-white h-screen `}>
        <div className="mt-5 text-2xl font-bold flex justify-center mb-5">CART</div>
        <div>
            {products.map(product => {
                return <div className="flex justify-center border-b pb-4 pt-4">
                    <div>
                        <img className="w-20 rounded-md" src={product.image_url}></img>
                    </div>
                    <div className="ml-[20%]">
                        <h1 className="font-semibold">{product.name}</h1>
                        <h3 className="text-slate-500">{product.description}</h3>
                        <div className="flex items-center mt-5">
                            <h3 className="  mr-4">RS. {product.price}</h3>
                            <PrimaryButton onClick={()=>{
                                handleRemoveItem(product.id)
                            }}>REMOVE ITEM</PrimaryButton>
                        </div>
                    </div>
                </div>
            })}
            
            <div className="flex justify-center mt-8 items-center">
                <span className="font-bold ">TOTAL- RS. {total}</span>
                <button className="bg-black text-white px-5 ml-8 py-2 rounded-md "
                    onClick={handlePlaceorder}>PLACE YOUR ORDER</button>
            </div>
        </div>
    </div>
}