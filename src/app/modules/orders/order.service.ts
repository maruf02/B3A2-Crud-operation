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
  console.log(remainingQuantity)

  const inStock = remainingQuantity > 0

  await ProductModel.findByIdAndUpdate(order.productId, {
    'inventory.quantity': remainingQuantity,
    'inventory.inStock': inStock,
  })

  const result = await OrderModel.create(order)
  return result
}

export const OrderServices = {
  createOrderIntoDB,
}
