import { useRecoilState, useRecoilValue } from "recoil"
import { productAtom } from "../store/productAtom"
import { totalSelector } from "../store/selectors";
import { PrimaryButton } from "./PrimaryButton";

export const Cart = () => {
    const [products,setProducts] = useRecoilState(productAtom);
    const total = useRecoilValue(totalSelector);
    console.log(total + 'total')

    function removeItem() {

    }

    return <div className="px-[5%]">
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
                            <PrimaryButton onClick={removeItem}>REMOVE ITEM</PrimaryButton>
                        </div>
                    </div>
                </div>
            })}
            <div className="flex justify-center mt-4">
                <span className="font-bold ">TOTAL: {total}</span>
                <button className="bg-black text-white px-5 ml-4 py-2 rounded-md ">BUY NOW</button>
            </div>
        </div>
    </div>
}