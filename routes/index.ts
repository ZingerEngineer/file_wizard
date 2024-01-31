import express from 'express'
import publicRoute from './publicRoute'
import privateRoute from './privateRoute'
const router = express.Router()

router.use('/', publicRoute)
router.use('/private', privateRoute)

export default router
