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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductServices.getAllProductsFromDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: products,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const product = await ProductServices.getProductByIdFromDB(productId)
    if (product) {
      res.status(200).json({
        success: true,
        data: product,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
}
