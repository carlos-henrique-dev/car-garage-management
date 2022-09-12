export interface IDeleteCarService {
  execute(params: IDeleteCarService.Params): IDeleteCarService.Result
}

export namespace IDeleteCarService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
