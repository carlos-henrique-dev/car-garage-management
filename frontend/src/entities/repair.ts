import { ICar } from './car'
import { ICostumer } from './costumer'
import { IEmployee } from './employee'
import { IProduct } from './product'

export interface IRepair {
  _id: string
  costumer: ICostumer
  car: ICar
  carParts: IProduct[]
  employee: IEmployee
  occurrenceDate: string | Date
  deletedAt?: Date
  description?: string
  total: number
}

export interface ICreateRepair {
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: Date
  description?: string
}

export interface IUpdateRepair {
  id: string
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: Date
  description?: string
}

export interface IRepairForm {
  id?: string
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: Date
  description?: string
}
