const express = require('express')
const calculateInterest = require('./controller')
const router = express.Router()


router.get("/getInterest",calculateInterest)

module.exports = router
