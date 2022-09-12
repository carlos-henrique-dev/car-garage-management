import { IFindOneEmployeeDTO } from '../dtos'
import { IEmployee } from './IEmployee'

export interface IFindOneEmployeeService {
  execute(data: IFindOneEmployeeService.Params): IFindOneEmployeeService.Result
}

export namespace IFindOneEmployeeService {
  export type Params = IFindOneEmployeeDTO

  export type Result = Promise<IEmployee | null>
}
