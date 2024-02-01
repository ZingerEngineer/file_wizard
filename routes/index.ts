import express from 'express'
import publicRoute from './publicRoutes'
import privateRoute from './privateRoutes'
import fileRouter from './fileRouter'
import privateRouteValidator from '../middlewares/privateRoutesValidator'
const router = express.Router()

router.use('/', publicRoute)
router.use('/private', privateRouteValidator, privateRoute)
router.use('/file', fileRouter)

export default router
