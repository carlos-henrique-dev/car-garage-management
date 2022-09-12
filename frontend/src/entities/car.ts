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

export interface ICreateCar {
  model: string
  registrationPlate: string
  brand: string
  costumer: string
}

export interface IUpdateCar {
  id: string
  model: string
  registrationPlate: string
  brand: string
  costumer: string
}

export interface ICarForm {
  id?: string
  model: string
  registrationPlate: string
  brand: string
  costumer: string
}
