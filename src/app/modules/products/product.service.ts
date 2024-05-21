import { Product } from './product.interface'
import { ProductModel } from './product.model'

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product)
  return result
}

const getAllProductsFromDB = async (searchTerm?: string) => {
  //   const products = await ProductModel.find()
  let query = {}
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    }
  }
  const products = await ProductModel.find(query)
  ////////////////////
  return products
}

const getProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findById(productId)
  return product
}

const updateProductByIdInDB = async (
  productId: string,
  productData: Product,
) => {
  const product = await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
  })
  return product
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdInDB,
}
