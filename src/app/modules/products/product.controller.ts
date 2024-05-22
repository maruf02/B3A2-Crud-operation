import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    // const { product: productData } = req.body
    // const result = await ProductServices.createProductIntoDB(productData)
    const product = req.body
    const result = await ProductServices.createProductIntoDB(product)
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
    // const products = await ProductServices.getAllProductsFromDB()
    const searchTerm = req.query.searchTerm as string
    const products = await ProductServices.getAllProductsFromDB(searchTerm)
    ////////////////////
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: products,
      })
    } else {
      res.status(200).json({
        success: true,
        message: `Product fetched successfully!`,
        data: products,
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
    // console.log(err)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const productData = req.body
    const result = await ProductServices.updateProductByIdInDB(
      productId,
      productData,
    )
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: result,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
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

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductServices.deleteProductByIdFromDB(productId)
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: result,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
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

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
}
