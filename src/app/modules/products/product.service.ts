import { Product } from './product.interface'
import { ProductModel } from './product.model'

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product)
  return result
}

const getAllProductsFromDB = async () => {
  const products = await ProductModel.find()
  return products
}

const getProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findById(productId)
  return product
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
}
