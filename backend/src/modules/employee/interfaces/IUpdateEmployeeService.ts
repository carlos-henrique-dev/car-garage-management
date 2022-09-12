import { IUpdateEmployeeDTO } from '../dtos'
import { IEmployee } from './IEmployee'

export interface IUpdateEmployeeService {
  execute(params: IUpdateEmployeeService.Params): IUpdateEmployeeService.Result
}

export namespace IUpdateEmployeeService {
  export type Params = {
    data: IUpdateEmployeeDTO
    id: string
  }

  export type Result = Promise<IEmployee | null>
}
