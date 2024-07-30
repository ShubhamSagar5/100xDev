import { Router } from "express"; 
import { login } from "../controller/user";


const authRoute = Router()


authRoute.get("/login",login)



export default authRoute