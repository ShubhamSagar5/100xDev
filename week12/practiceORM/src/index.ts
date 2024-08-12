import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient 


// const addUser = async(userName:string,password:string,firstName:string,lastName:string) => {
//         const res = await prisma.user.create({
//             data:{
//                 userName:userName,
//                 firstName:firstName,
//                 lastName:lastName,
//                 password:password
//             }
//         })

//         console.log(res)
// }

// addUser('hari2','123456789','hari','hari') 



// const addTodo = async(title:string,desc:string,userId:number) => {
//     const res = await prisma.todo.create({
//         data:{
//             title:title,
//             description:desc,
//             userId:userId
//         },
//         select:{
//             user:true
//         }
//     })

//     console.log(res)
// }


// addTodo("secondTasks","dhdhdh",1)


const getuser = async(userId:number) => {
    const res = await prisma.user.findFirst({
        where:{
            id:userId
        },
        select:{
            todo:true
        }
    })

    console.log(res)
}

getuser(1)