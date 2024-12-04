import {  useSetRecoilState } from "recoil"
import { PrimaryButton } from "./PrimaryButton"
import { productAtom } from "../store/productAtom";
import { Product } from "../utils/types";

export const Card = ({product}: {
    product: Product
})=>{
    
    const setCart = useSetRecoilState(productAtom);

    function addToCart() {
        setCart(p => [...p,product]);
    }

    return <div className="p-4  border w-64 mr-10 shadow-md my-5">
        <img className="w-full h-56" src={product.image_url}></img>
        <div className="mt-5 flex flex-col items-center">
            <h3 className=" text-xl ">{product.name}</h3>
            <h5 className="text-sm text-slate-500 leading-tight mb-2">{product.description}</h5>
            <div className=" ">
                <span className="mr-4">Rs. {product.price}</span>
                <PrimaryButton onClick={addToCart}> ADD TO CART </PrimaryButton>
            </div>
        </div>
    </div>
}