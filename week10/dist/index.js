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
createUser({ firstName: "hari2", lastName: "hari2", email: "hari2", password: "hari" })
    .then((user) => {
    console.log(user);
})
    .catch((error) => {
    console.log(error);
});
