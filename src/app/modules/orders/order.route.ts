import express from 'express'
import { OrderController } from './order.controller'

const router = express.Router()

router.post('/orders', OrderController.createProduct)
router.get('/orders', OrderController.getAllOrders)

export const OrderRoutes = router
