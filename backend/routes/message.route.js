import express from "express"
import { sendMessage } from "../controllers/message.controller.js"
import { Router } from "express"
import protectRoute from "../middleware/protectRoute.js"

const router=Router()

router.post('/send/:id',protectRoute,sendMessage)
export default router