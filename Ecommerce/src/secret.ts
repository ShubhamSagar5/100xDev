import dotenv from 'dotenv'

dotenv.config({
    path:".env"
})
export const JWTSECRET = process.env.JWT_SECRET !
export const  PORT = process.env.PORT

