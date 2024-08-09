interface users {
    readonly id:string,
    name:string,
    age:string,
    email:string,
    password:string
}

// type userValue = Pick<users,'age'| 'email'>
// type updatePropsOptional = Partial<users>

// const man = (value:updatePropsOptional)=> {
    
// }
// man({
//     id:"sjsj"
// })

// const user  : users = {
//     id:"sjsj",
//     name:"ksks",
//     email:"sjsj",
//     password:"sksk",
//     age:"ss"
// }
// user.id = "112"
// user.age = "10" 


// type users = Record<string,number>  

// const user : users = {
//     "name":10,
//     "shs":20
// }

// type data = {
//     name:string,
//     age:number
// }

// const users = new Map<string,data>()  

// users.set("shsh",{name:"shsh",age:10})
// users.set("shhs",{name:"shsh",age:20}) 

// const usr = users.get("shhs") 
// console.log(usr) 


type eventType = 'click' | 'scroll' | 'down' 

type excludevent = Exclude<eventType , 'click'> 


const handleFun = (event:excludevent) => {
    console.log(event)
}

handleFun('scroll')