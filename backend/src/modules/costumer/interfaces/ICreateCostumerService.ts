import { ICreateCostumerDTO } from '../dtos'
import { ICostumer } from './ICostumer'

export interface ICreateCostumerService {
  execute(data: ICreateCostumerService.Params): ICreateCostumerService.Result
}

export namespace ICreateCostumerService {
  export type Params = ICreateCostumerDTO

  export type Result = Promise<ICostumer | null>
}
