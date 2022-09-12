import { IEmployee } from './IEmployee'

export interface IFindEmployeesService {
  execute(): IFindEmployeesService.Result
}

export namespace IFindEmployeesService {
  export type Result = Promise<IEmployee[]>
}
