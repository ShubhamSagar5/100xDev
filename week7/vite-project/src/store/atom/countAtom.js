import { atom, selector } from "recoil";



export const countAtom = atom({
    key:'countAtom',
    default:0
})

export const checkEven = selector({
    key:'checkEven',
    get:({get})=>{
        const count = get(countAtom)
        return count % 2 == 0 ? 'its even' : 'its odd'
    }
})