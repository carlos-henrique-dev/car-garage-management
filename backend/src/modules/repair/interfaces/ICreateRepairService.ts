import { ICreateRepairDTO } from '../dtos'
import { IRepair } from './IRepair'

export interface ICreateRepairService {
  execute(data: ICreateRepairService.Params): ICreateRepairService.Result
}

export namespace ICreateRepairService {
  export type Params = ICreateRepairDTO

  export type Result = Promise<IRepair | null>
}
