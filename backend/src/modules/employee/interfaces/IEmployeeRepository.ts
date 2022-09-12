import { IUpdateEmployeeDTO } from '../dtos'
import { IEmployee } from './IEmployee'

export interface IEmployeeRepository {
  findOne(params: IEmployeeRepository.FindOneParams): IEmployeeRepository.FindOneResult
  find(): IEmployeeRepository.FindResult
  save(Employee: IEmployee): IEmployeeRepository.SaveResult
  update(Employee: IEmployeeRepository.UpdateParams): IEmployeeRepository.UpdateResult
  delete(id: string): IEmployeeRepository.DeleteResult
}

export namespace IEmployeeRepository {
  export type FindOneParams = { id?: string; email?: string }
  export type FindOneResult = Promise<IEmployee | null>

  export type FindResult = Promise<IEmployee[]>

  export type SaveResult = Promise<IEmployee | null>

  export type UpdateParams = Partial<IUpdateEmployeeDTO>
  export type UpdateResult = Promise<IEmployee | null>

  export type DeleteResult = Promise<boolean>
}
