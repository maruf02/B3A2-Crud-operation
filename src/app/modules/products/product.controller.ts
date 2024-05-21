import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body
    const result = await ProductServices.createProductIntoDB(productData)
    res.status(200).json({
      success: true,
      message: 'Product create successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

// get methos implement

export const ProductController = {
  createProduct,
}
