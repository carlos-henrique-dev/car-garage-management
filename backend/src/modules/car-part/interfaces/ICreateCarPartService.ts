import { ICreateCarPartDTO } from '../dtos'
import { ICarPart } from './ICarPart'

export interface ICreateCarPartService {
  execute(data: ICreateCarPartService.Params): ICreateCarPartService.Result
}

export namespace ICreateCarPartService {
  export type Params = ICreateCarPartDTO

  export type Result = Promise<ICarPart | null>
}
