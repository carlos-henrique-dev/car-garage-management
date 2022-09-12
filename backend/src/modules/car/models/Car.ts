import { Schema, model } from 'mongoose'
import { ICar } from '../interfaces'

const CarSchema = new Schema<ICar>({
  model: {
    type: String,
    required: true,
  },
  registrationPlate: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  costumer: {
    type: Schema.Types.ObjectId,
    ref: 'Costumer',
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const CarModel = model('Car', CarSchema)
export { CarModel }
