import { IUpdateBrandDTO } from '../dtos'
import { IBrand } from './IBrand'

export interface IUpdateBrandService {
  execute(params: IUpdateBrandService.Params): IUpdateBrandService.Result
}

export namespace IUpdateBrandService {
  export type Params = {
    data: IUpdateBrandDTO
    id: string
  }

  export type Result = Promise<IBrand | null>
}
