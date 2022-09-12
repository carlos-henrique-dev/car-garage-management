export interface IDeleteBrandService {
  execute(params: IDeleteBrandService.Params): IDeleteBrandService.Result
}

export namespace IDeleteBrandService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
