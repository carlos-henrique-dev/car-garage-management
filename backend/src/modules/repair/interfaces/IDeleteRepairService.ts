export interface IDeleteRepairService {
  execute(params: IDeleteRepairService.Params): IDeleteRepairService.Result
}

export namespace IDeleteRepairService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
