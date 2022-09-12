import { IUpdateRepairDTO } from '../dtos'
import { IRepair } from './IRepair'

export interface IUpdateRepairService {
  execute(params: IUpdateRepairService.Params): IUpdateRepairService.Result
}

export namespace IUpdateRepairService {
  export type Params = {
    data: IUpdateRepairDTO
    id: string
  }

  export type Result = Promise<IRepair | null>
}
