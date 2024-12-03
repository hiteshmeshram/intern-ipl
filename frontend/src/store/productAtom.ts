import { atom } from "recoil";
import { Product } from "../utils/types";

export const productAtom = atom<Product[]>({
    key: 'productAtom',
    default: []
})