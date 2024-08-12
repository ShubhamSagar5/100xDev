"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
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
const getuser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.findFirst({
        where: {
            id: userId
        },
        select: {
            todo: true
        }
    });
    console.log(res);
});
getuser(1);
