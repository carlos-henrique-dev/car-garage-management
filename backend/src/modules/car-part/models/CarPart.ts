import { Schema, model } from 'mongoose'
import { ICarPart } from '../interfaces'

const CarPartSchema = new Schema<ICarPart>({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const CarPartModel = model('CarPart', CarPartSchema)
export { CarPartModel }
