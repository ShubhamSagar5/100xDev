import express from 'express'
import { createCourse, getAllCourse, signIn } from '../controller/admin.controller.js'
import { adminAuth } from '../middleware/admin.auth.js'

const router = express.Router() 

router.post("/signIn",signIn)
router.post("/createCourse",adminAuth,createCourse)
router.get("/getAllCourse",adminAuth,getAllCourse)

export default router