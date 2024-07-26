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
const prisma = new client_1.PrismaClient();
function createUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ firstName, lastName, email, password }) {
        try {
            const res = yield prisma.users.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password
                },
                select: {
                    firstName: true,
                    lastName: true,
                    email: true
                }
            });
            return res;
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
createUser({ firstName: "hari7", lastName: "hari7", email: "hari7", password: "hari" })
    .then((user) => {
    console.log(user);
})
    .catch((error) => {
    console.log(error);
});
const findUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.users.findFirst({
            where: {
                firstName: name
            }
        });
        return user;
    }
    catch (error) {
        console.log(error.message);
    }
});
findUser("hari2")
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error.message);
});
const updateUser = (idNum, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.users.update({
            where: {
                id: idNum
            },
            data: {
                firstName,
                lastName
            }
        });
        return res;
    }
    catch (error) {
        console.log(error);
    }
});
updateUser(3, "monty", "sagar")
    .then((res) => {
    console.log("record update successfully");
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
const deleteUser = (idNum) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.users.delete({
            where: {
                id: idNum
            }
        });
        return res;
    }
    catch (error) {
        console.log(error);
    }
});
deleteUser(3)
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
