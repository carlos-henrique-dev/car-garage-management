import { IUpdateCarPartDTO } from '../dtos'
import { ICarPart } from './ICarPart'

export interface IUpdateCarPartService {
  execute(params: IUpdateCarPartService.Params): IUpdateCarPartService.Result
}

export namespace IUpdateCarPartService {
  export type Params = {
    data: IUpdateCarPartDTO
    id: string
  }

  export type Result = Promise<ICarPart | null>
}
