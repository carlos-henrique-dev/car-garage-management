import { IUpdateCarDTO } from '../dtos'
import { ICar } from './ICar'

export interface IUpdateCarService {
  execute(params: IUpdateCarService.Params): IUpdateCarService.Result
}

export namespace IUpdateCarService {
  export type Params = {
    data: IUpdateCarDTO
    id: string
  }

  export type Result = Promise<ICar | null>
}
