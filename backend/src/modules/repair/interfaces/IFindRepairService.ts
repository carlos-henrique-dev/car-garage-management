import { IRepair } from './IRepair'

export interface IFindRepairsService {
  execute(): IFindRepairsService.Result
}

export namespace IFindRepairsService {
  export type Result = Promise<IRepair[]>
}
