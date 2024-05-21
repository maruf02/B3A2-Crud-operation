import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//will call controller
router.post('/products', ProductController.createProduct)
router.get('/products', ProductController.getAllProducts)
router.get('/products/:productId', ProductController.getProductById)
router.put('/products/:productId', ProductController.updateProductById)
export const ProductRoutes = router
