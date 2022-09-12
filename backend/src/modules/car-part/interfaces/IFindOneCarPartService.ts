import { IFindOneCarPartDTO } from '../dtos'
import { ICarPart } from './ICarPart'

export interface IFindOneCarPartService {
  execute(data: IFindOneCarPartService.Params): IFindOneCarPartService.Result
}

export namespace IFindOneCarPartService {
  export type Params = IFindOneCarPartDTO

  export type Result = Promise<ICarPart | null>
}
