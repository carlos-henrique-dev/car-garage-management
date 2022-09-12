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
