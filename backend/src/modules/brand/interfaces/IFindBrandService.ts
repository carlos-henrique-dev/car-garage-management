import { IBrand } from './IBrand'

export interface IFindBrandsService {
  execute(): IFindBrandsService.Result
}

export namespace IFindBrandsService {
  export type Result = Promise<IBrand[]>
}
