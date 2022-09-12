import { Schema } from 'mongoose'

export interface ICar {
  _id?: string
  model: string
  registrationPlate: string
  brand: string | Schema.Types.ObjectId
  costumer: string | Schema.Types.ObjectId
  deletedAt?: Date
}
