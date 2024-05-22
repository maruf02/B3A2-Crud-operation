import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.route'
import { OrderRoutes } from './app/modules/orders/order.route'
const app: Application = express()
// const port = 3000

//parser
app.use(express.json())
app.use(cors())

app.use('/api', ProductRoutes)
app.use('/api', OrderRoutes)
app.use((req: Request, res: Response, next: NextFunction) => {
  // res.status(404).send('404 Not Found')
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
