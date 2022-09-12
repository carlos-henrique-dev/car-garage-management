import { IFindOneBrandDTO } from '../dtos'
import { IBrand } from './IBrand'

export interface IFindOneBrandService {
  execute(data: IFindOneBrandService.Params): IFindOneBrandService.Result
}

export namespace IFindOneBrandService {
  export type Params = IFindOneBrandDTO

  export type Result = Promise<IBrand | null>
}
