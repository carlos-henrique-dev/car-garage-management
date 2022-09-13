import { IRepairRepository, IFindOneRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneRepairService implements IFindOneRepairService {
  private repairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.repairRepository = RepairRepository
  }

  async execute(params: IFindOneRepairService.Params): IFindOneRepairService.Result {
    return this.repairRepository.findOne(params)
  }
}
