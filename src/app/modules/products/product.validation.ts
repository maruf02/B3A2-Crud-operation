import { z } from 'zod'

// Define the Variant schema
const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
})

// Define the Inventory schema
const InventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
})

// Define the Product schema
export const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
})
