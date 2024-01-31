import express from 'express'
import publicRoute from './publicRoute'
import privateRoute from './privateRoute'
import fileRouter from './fileRouter'
const router = express.Router()

router.use('/', publicRoute)
router.use('/private', privateRoute)
router.use('/file', fileRouter)

export default router
