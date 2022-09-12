import { ICarPart } from './ICarPart'

export interface IFindCarPartsService {
  execute(): IFindCarPartsService.Result
}

export namespace IFindCarPartsService {
  export type Result = Promise<ICarPart[]>
}
