import { Request, Response } from 'express'
import { OrderServices } from './order.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    // const { product: productData } = req.body
    // const result = await ProductServices.createProductIntoDB(productData)
    const order = req.body
    const result = await OrderServices.createOrderIntoDB(order)
    res.status(200).json({
      success: true,
      message: 'Product create successfully',
      data: result,
    })
  } catch (err: any) {
    console.log(err)
    if (err.message === 'ProductNotFound') {
      res.status(400).json({
        success: false,
        message: 'Product not found',
      })
    } else if (err.message === 'InsufficientQuantity') {
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
    res.status(200).json({
      success: true,
      message: `order matching search term ${email}fetched successfully!`,
      data: orders,
    })
  } catch (err) {
    console.log(err)
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
