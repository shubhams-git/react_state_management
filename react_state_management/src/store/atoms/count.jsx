import { atom,selector } from "recoil";


export const countAtom = atom({
    key: "countAtom",
    default:0
})

export const isEven = selector({
    key: "isEven",
    get: ({get})=>{
        const count = get(countAtom);
        return count%2 && count != 0?"It is even":"";
    }
})