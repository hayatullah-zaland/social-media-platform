
import express from "express"
const router =express.Router()
import {getUser,postUser} from "../controller/userController.js"

router.get("/",getUser)
router.post("/",postUser)


export default router
