import { Schema } from 'mongoose'

export interface ICreateRepairDTO {
  car: string
  brand: string
  costumer: string
  carParts: string | Schema.Types.ObjectId[]
  employee: string
  occurrenceDate: Date
  description?: string
}
