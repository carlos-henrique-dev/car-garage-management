import { IFindOneCarDTO } from '../dtos'
import { ICar } from './ICar'

export interface IFindOneCarService {
  execute(data: IFindOneCarService.Params): IFindOneCarService.Result
}

export namespace IFindOneCarService {
  export type Params = IFindOneCarDTO

  export type Result = Promise<ICar | null>
}
