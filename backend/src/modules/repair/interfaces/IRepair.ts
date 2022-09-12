import { Schema } from 'mongoose'

export interface IRepair {
  _id?: string
  costumer: string | Schema.Types.ObjectId
  car: string | Schema.Types.ObjectId
  carParts: string | Schema.Types.ObjectId[]
  employee: string | Schema.Types.ObjectId
  occurrenceDate: string | Date
  deletedAt?: Date
  description?: string
  total: number
}
