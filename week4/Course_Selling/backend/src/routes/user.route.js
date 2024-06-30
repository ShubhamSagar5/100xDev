import express from 'express'
import { byCourse, getAllCourse, getPurchasedCourse, signUp } from '../controller/user.controller.js'
import userAuth from '../middleware/user.auth.js'




const router = express.Router() 


router.post('/signIn',signUp)
router.get('/getAllCourse',getAllCourse)
router.post('/byCourse/:id',userAuth,byCourse)
router.get('/purchasedCourse',userAuth,getPurchasedCourse)


export default router