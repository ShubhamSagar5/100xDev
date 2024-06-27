const express = require('express')
const auth = require('../middleware/auth')
const { registerUser, login, allUser } = require('../controllers/user')


const router = express.Router() 



router.post("/register",registerUser)

router.post("/login",login)
router.get('/all',auth,allUser)



module.exports =router