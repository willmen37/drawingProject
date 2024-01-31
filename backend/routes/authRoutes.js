import express from "express"
const router = express.Router()

import authCtrl from "../controllers/authController.js"

// const authCtrl = require('../controllers/authController.js')

// const express = require("express")




router.post("/register", authCtrl.register)
router.post('/login', authCtrl.login)

export default router