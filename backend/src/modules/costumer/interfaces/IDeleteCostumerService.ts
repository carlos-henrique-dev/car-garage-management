export interface IDeleteCostumerService {
  execute(params: IDeleteCostumerService.Params): IDeleteCostumerService.Result
}

export namespace IDeleteCostumerService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
