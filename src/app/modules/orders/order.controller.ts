import { Request, Response } from 'express'
import { OrderServices } from './order.service'
import { orderValidationSchema } from './order.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    // const { product: productData } = req.body
    // const result = await ProductServices.createProductIntoDB(productData)
    const order = req.body
    const zodParseDataOrder = orderValidationSchema.parse(order)
    const result = await OrderServices.createOrderIntoDB(zodParseDataOrder)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error: any) {
    if (error.message === 'ProductNotFound') {
      res.status(400).json({
        success: false,
        message: 'Product not found',
      })
    } else if (error.message === 'InsufficientQuantity') {
      res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      })
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      })
    }
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    // const products = await OrderServices.getAllOrdersFromDB()
    const email = req.query.email as string
    const orders = await OrderServices.getAllOrdersFromDB(email)
    ////////////////////

    if (email) {
      res.status(200).json({
        success: true,
        message: `order matching search term '${email}' fetched successfully!`,
        data: orders,
      })
    } else {
      res.status(200).json({
        success: true,
        message: `order fetched successfully!`,
        data: orders,
      })
    }
  } catch (err) {
    // console.log(err)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

export const OrderController = {
  createProduct,
  getAllOrders,
}
