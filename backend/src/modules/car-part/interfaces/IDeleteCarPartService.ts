export interface IDeleteCarPartService {
  execute(params: IDeleteCarPartService.Params): IDeleteCarPartService.Result
}

export namespace IDeleteCarPartService {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}
