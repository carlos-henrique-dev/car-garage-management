import { ICostumer } from './ICostumer'

export interface IFindCostumersService {
  execute(): IFindCostumersService.Result
}

export namespace IFindCostumersService {
  export type Result = Promise<ICostumer[]>
}
