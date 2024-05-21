import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//will call controller
router.post('/products', ProductController.createProduct)

export const ProductRoutes = router
