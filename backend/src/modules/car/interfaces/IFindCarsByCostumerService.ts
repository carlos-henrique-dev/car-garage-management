import { ICar } from './ICar'

export interface IFindCarsByCostumerService {
  execute(params: IFindCarsByCostumerService.Params): IFindCarsByCostumerService.Result
}

export namespace IFindCarsByCostumerService {
  export type Params = { costumer: string }

  export type Result = Promise<ICar[]>
}
