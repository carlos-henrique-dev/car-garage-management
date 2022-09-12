import { IFindOneCostumerDTO } from '../dtos'
import { ICostumer } from './ICostumer'

export interface IFindOneCostumerService {
  execute(data: IFindOneCostumerService.Params): IFindOneCostumerService.Result
}

export namespace IFindOneCostumerService {
  export type Params = IFindOneCostumerDTO

  export type Result = Promise<ICostumer | null>
}
