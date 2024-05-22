import { ProductModel } from '../products/product.model'
import { Order } from './order.interface'
import { OrderModel } from './order.model'

const createOrderIntoDB = async (order: Order) => {
  //   const productExists = await ProductModel.exists({ _id: order.productId })
  //   if (!productExists) {
  //     console.log(order.quantity)
  //     throw new Error('ProductNotFound')
  //     // return null
  //   }
  const product = await ProductModel.findById(order.productId)

  if (!product) {
    throw new Error('ProductNotFound')
  }

  if (order.quantity > product.inventory.quantity) {
    throw new Error('InsufficientQuantity')
  }

  const remainingQuantity = product.inventory.quantity - order.quantity
  // console.log(remainingQuantity)

  const inStock = remainingQuantity > 0

  await ProductModel.findByIdAndUpdate(order.productId, {
    'inventory.quantity': remainingQuantity,
    'inventory.inStock': inStock,
  })

  const result = await OrderModel.create(order)
  return result
}

const getAllOrdersFromDB = async (email?: string) => {
  let query = {}
  if (email) {
    query = {
      $or: [
        { email: { $regex: email, $options: 'i' } },
        // { description: { $regex: searchTerm, $options: 'i' } },
        // { category: { $regex: searchTerm, $options: 'i' } },
      ],
    }
  }
  const products = await OrderModel.find(query)
  // const products = await OrderModel.find()
  ////////////////////
  return products
}

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
}
