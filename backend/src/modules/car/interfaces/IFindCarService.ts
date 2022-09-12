import { ICar } from './ICar'

export interface IFindCarsService {
  execute(): IFindCarsService.Result
}

export namespace IFindCarsService {
  export type Result = Promise<ICar[]>
}
