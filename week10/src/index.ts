import { Prisma, PrismaClient } from "@prisma/client";
import { error } from "console";

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

createUser({firstName:"hari8",lastName:"hari8",email:"hari8",password:"hari"})
.then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log(error)
})

const findUser = async(name:string) => {
    try {
        const user = await prisma.users.findFirst({
            where:{
                firstName:name
            }
        })
        
        return user
    } catch (error:any) {
        console.log(error.message)
    }
}

findUser("hari2")
.then((res)=>{
    console.log(res)
})
.catch((error:any)=>{
    console.log(error.message)
})

const updateUser = async(idNum:number,firstName:string,lastName:string) => {
    try {
        const res = await prisma.users.update({ 
           where:{
            id:idNum
           },
           data:{
            firstName,
            lastName
        }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

updateUser(3,"monty","sagar")
.then((res)=>{
    console.log("record update successfully")
    console.log(res )
})
.catch((error)=>{
    console.log(error)
})

const deleteUser = async(idNum:number) => {
    try {
        const res = await prisma.users.delete({
            where:{
                id:idNum
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

deleteUser(3)
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})