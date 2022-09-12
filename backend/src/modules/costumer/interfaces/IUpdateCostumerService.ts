import { IUpdateCostumerDTO } from '../dtos'
import { ICostumer } from './ICostumer'

export interface IUpdateCostumerService {
  execute(params: IUpdateCostumerService.Params): IUpdateCostumerService.Result
}

export namespace IUpdateCostumerService {
  export type Params = {
    data: IUpdateCostumerDTO
    id: string
  }

  export type Result = Promise<ICostumer | null>
}
