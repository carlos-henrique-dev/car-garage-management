import { Schema, model } from 'mongoose'
import { IRepair } from '../interfaces'

const RepairSchema = new Schema<IRepair>({
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  carParts: {
    type: [Schema.Types.ObjectId],
    ref: 'CarPart',
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  costumer: {
    type: Schema.Types.ObjectId,
    ref: 'Costumer',
    required: true,
  },
  occurrenceDate: {
    type: Date,
    default: new Date(),
  },
  description: {
    type: String,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

const RepairModel = model('Repair', RepairSchema)
export { RepairModel }
