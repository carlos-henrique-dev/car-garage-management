import { IBrand } from './brand'
import { ICar } from './car'
import { ICostumer } from './costumer'
import { IEmployee } from './employee'
import { IProduct } from './product'

export interface IRepair {
  _id: string
  brand: IBrand
  costumer: ICostumer
  car: ICar
  carParts: IProduct[]
  employee: IEmployee
  occurrenceDate: string | Date
  deletedAt?: Date
  description?: string
}

export interface ICreateRepair {
  brand: string
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: string
  description?: string
}

export interface IUpdateRepair {
  id: string
  brand: string
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: string
  description?: string
}

export interface IRepairForm {
  id?: string
  brand: string
  costumer: string
  car: string
  carParts: string[]
  employee: string
  occurrenceDate: string
  description?: string
}
