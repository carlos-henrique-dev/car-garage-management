import { IBrand } from './IBrand'

export interface IBrandRepository {
  findOne(params: IBrandRepository.FindOneParams): IBrandRepository.FindOneResult
  find(): IBrandRepository.FindResult
  save(Brand: IBrand): IBrandRepository.SaveResult
  update(Brand: IBrandRepository.UpdateParams): IBrandRepository.UpdateResult
  delete(id: string): IBrandRepository.DeleteResult
}

export namespace IBrandRepository {
  export type FindOneParams = { id?: string; name?: string }
  export type FindOneResult = Promise<IBrand | null>

  export type FindResult = Promise<IBrand[]>

  export type SaveResult = Promise<IBrand | null>

  export type UpdateParams = Partial<IBrand>
  export type UpdateResult = Promise<IBrand | null>

  export type DeleteResult = Promise<boolean>
}
