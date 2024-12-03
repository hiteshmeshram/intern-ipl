import { selector } from "recoil";
import { productAtom } from "./productAtom";

export const lengthSelector = selector({
    key: 'lengthSelector',
    get: ({get}) => {
        const products = get(productAtom);
        return products.length;
    }
})


export const totalSelector = selector({
    key: 'totalSelector',
    get: ({get}) => {
        const products = get(productAtom);
        const price = products.reduce((acc,curr)=>{
            return acc += Number(curr.price);
        },0)

        return price;
    }
})