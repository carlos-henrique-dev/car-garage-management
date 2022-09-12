import { ICostumer } from './ICostumer'

export interface ICostumerRepository {
  findOne(params: ICostumerRepository.FindOneParams): ICostumerRepository.FindOneResult
  find(): ICostumerRepository.FindResult
  save(costumer: ICostumer): ICostumerRepository.SaveResult
  update(costumer: ICostumerRepository.UpdateParams): ICostumerRepository.UpdateResult
  delete(id: string): ICostumerRepository.DeleteResult
}

export namespace ICostumerRepository {
  export type FindOneParams = { id?: string; email?: string }
  export type FindOneResult = Promise<ICostumer | null>

  export type FindResult = Promise<ICostumer[]>

  export type SaveResult = Promise<ICostumer | null>

  export type UpdateParams = Partial<ICostumer>
  export type UpdateResult = Promise<ICostumer | null>

  export type DeleteResult = Promise<boolean>
}
