import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from 'axios'
import { Todos } from "./components/todos";


export const notificationAtom = atom({
    key:'notification',
    default:selector({
        key:'networkSelector',
        get: async() => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNoificationSelector = selector({
    key:'totalNotification',
    get:({get})=>{
        const notification = get(notificationAtom)
        
        return notification.notifications + notification.network + notification.jobs + notification.messaging 
    }
})


// export const todoAtomFamily = atomFamily({
//     key:'todoAtomfamily',
//     default:(id)=>{
//         return Todos.find(r => r.id === id)
//     }
// })


export const todoAtomFamily = atomFamily({
    key:'todoAtomfamily',
    default:selectorFamily({
        key:'todoSelectorfamily',
        get: (id) => async({get})=>{
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo
        }
    })
})



















// export const notificationAtom = atom({
//     key:'notification',
//     default:112
// })

// export const networkAtom = atom({
//     key:'network',
//     default:20
// })

// export const jobsAtom = atom({
//     key:'jobs',
//     default:20
// })

// export const messagingAtom  = atom({
//     key:'message',
//     default:20
// })

// export const totalNoificationSelector = selector({
//     key:'totalNotification',
//     get:({get})=>{
//         const notification = get(notificationAtom)
//         const network = get(networkAtom)
//         const job = get(jobsAtom)
//         const message = get(messagingAtom)
//         return notification + network  + job + message 
//     }
// })