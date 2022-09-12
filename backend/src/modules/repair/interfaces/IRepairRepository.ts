import { IRepair } from './IRepair'

export interface IRepairRepository {
  findOne(params: IRepairRepository.FindOneParams): IRepairRepository.FindOneResult
  find(): IRepairRepository.FindResult
  save(Repair: IRepair): IRepairRepository.SaveResult
  update(Repair: IRepairRepository.UpdateParams): IRepairRepository.UpdateResult
  delete(id: string): IRepairRepository.DeleteResult
}

export namespace IRepairRepository {
  export type FindOneParams = { id?: string; registrationPlate?: string }
  export type FindOneResult = Promise<IRepair | null>

  export type FindResult = Promise<IRepair[]>

  export type SaveResult = Promise<IRepair | null>

  export type UpdateParams = Partial<IRepair>
  export type UpdateResult = Promise<IRepair | null>

  export type DeleteResult = Promise<boolean>
}
