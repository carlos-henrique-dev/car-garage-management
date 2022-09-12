import { Schema, model } from 'mongoose'
import { IEmployee } from '../interfaces'

const EmployeeSchema = new Schema<IEmployee>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hiringDate: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const EmployeeModel = model('Employee', EmployeeSchema)
export { EmployeeModel }
