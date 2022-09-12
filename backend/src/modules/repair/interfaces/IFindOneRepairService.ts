import { IFindOneRepairDTO } from '../dtos'
import { IRepair } from './IRepair'

export interface IFindOneRepairService {
  execute(data: IFindOneRepairService.Params): IFindOneRepairService.Result
}

export namespace IFindOneRepairService {
  export type Params = IFindOneRepairDTO

  export type Result = Promise<IRepair | null>
}
