import { Schema, model } from 'mongoose'
import { IBrand } from '../interfaces'

const BrandSchema = new Schema<IBrand>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const BrandModel = model('Brand', BrandSchema)
export { BrandModel }
