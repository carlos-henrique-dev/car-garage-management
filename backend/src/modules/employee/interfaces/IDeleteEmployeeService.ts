export interface IDeleteEmployeeService {
  execute(params: IDeleteEmployeeService.Params): IDeleteEmployeeService.Result
}

export namespace IDeleteEmployeeService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
