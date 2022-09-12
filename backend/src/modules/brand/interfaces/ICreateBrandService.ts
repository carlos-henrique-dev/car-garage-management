import { ICreateBrandDTO } from '../dtos'
import { IBrand } from './IBrand'

export interface ICreateBrandService {
  execute(data: ICreateBrandService.Params): ICreateBrandService.Result
}

export namespace ICreateBrandService {
  export type Params = ICreateBrandDTO

  export type Result = Promise<IBrand | null>
}
