import express from 'express'
import helloWorldRouter from './helloWorldRouter'
const router = express.Router()
router.use('/hello', helloWorldRouter)

export default router
