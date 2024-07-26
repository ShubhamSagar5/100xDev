import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient() 

interface name {
    firstName:string,
    lastName : string,
    email:string,
    password:string
}

async function createUser({firstName,lastName,email,password}:name) {
    try {
        const res = await prisma.users.create({
            data:{
                firstName,
                lastName,
                email,
                password
            },
            select:{
                firstName:true,
                lastName:true,
                email:true
            }
        })

        return res

    } catch (error:any) {
        console.log(error.message)
    }
}

createUser({firstName:"hari2",lastName:"hari2",email:"hari2",password:"hari"})
.then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log(error)
})