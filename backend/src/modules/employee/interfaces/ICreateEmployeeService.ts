import { ICreateEmployeeDTO } from '../dtos'
import { IEmployee } from './IEmployee'

export interface ICreateEmployeeService {
  execute(data: ICreateEmployeeService.Params): ICreateEmployeeService.Result
}

export namespace ICreateEmployeeService {
  export type Params = ICreateEmployeeDTO

  export type Result = Promise<IEmployee | null>
}
