import express from "express"
import userCtrl from "../controllers/userController.js"

// const userCtrl = require("../controllers/")

const router = express.Router()

router.get("/", userCtrl.show)

export default router