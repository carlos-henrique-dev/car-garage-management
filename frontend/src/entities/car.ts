import { IBrand } from './brand'
import { ICostumer } from './costumer'

export interface ICar {
  _id: string
  model: string
  registrationPlate: string
  brand: IBrand
  costumer: ICostumer
  deletedAt?: Date
}
