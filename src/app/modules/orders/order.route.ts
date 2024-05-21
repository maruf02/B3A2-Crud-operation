import express from 'express'
import { OrderController } from './order.controller'

const router = express.Router()

router.post('/orders', OrderController.createProduct)

export const OrderRoutes = router
