import { ICarPart } from './ICarPart'

export interface ICarPartRepository {
  findOne(params: ICarPartRepository.FindOneParams): ICarPartRepository.FindOneResult
  find(): ICarPartRepository.FindResult
  save(CarPart: ICarPart): ICarPartRepository.SaveResult
  update(CarPart: ICarPartRepository.UpdateParams): ICarPartRepository.UpdateResult
  delete(id: string): ICarPartRepository.DeleteResult
}

export namespace ICarPartRepository {
  export type FindOneParams = { id?: string; code?: string }
  export type FindOneResult = Promise<ICarPart | null>

  export type FindResult = Promise<ICarPart[]>

  export type SaveResult = Promise<ICarPart | null>

  export type UpdateParams = Partial<ICarPart>
  export type UpdateResult = Promise<ICarPart | null>

  export type DeleteResult = Promise<boolean>
}
