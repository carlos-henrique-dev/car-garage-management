import { ICar } from './ICar'

export interface ICarRepository {
  findOne(params: ICarRepository.FindOneParams): ICarRepository.FindOneResult
  find(): ICarRepository.FindResult
  save(Car: ICar): ICarRepository.SaveResult
  update(Car: ICarRepository.UpdateParams): ICarRepository.UpdateResult
  delete(id: string): ICarRepository.DeleteResult
}

export namespace ICarRepository {
  export type FindOneParams = { id?: string; registrationPlate?: string }
  export type FindOneResult = Promise<ICar | null>

  export type FindResult = Promise<ICar[]>

  export type SaveResult = Promise<ICar | null>

  export type UpdateParams = Partial<ICar>
  export type UpdateResult = Promise<ICar | null>

  export type DeleteResult = Promise<boolean>
}
