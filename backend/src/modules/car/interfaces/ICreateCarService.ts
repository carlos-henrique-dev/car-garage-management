import { ICreateCarDTO } from '../dtos'
import { ICar } from './ICar'

export interface ICreateCarService {
  execute(data: ICreateCarService.Params): ICreateCarService.Result
}

export namespace ICreateCarService {
  export type Params = ICreateCarDTO

  export type Result = Promise<ICar | null>
}
