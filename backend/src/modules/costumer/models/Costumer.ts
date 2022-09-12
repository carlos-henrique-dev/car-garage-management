import { Schema, model } from 'mongoose'
import { ICostumer } from '../interfaces'

const CostumerSchema = new Schema<ICostumer>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const CostumerModel = model('Costumer', CostumerSchema)
export { CostumerModel }
