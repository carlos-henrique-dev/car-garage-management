import { IRepairRepository, IFindOneRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneRepairService implements IFindOneRepairService {
  private RepairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.RepairRepository = RepairRepository
  }

  async execute(params: IFindOneRepairService.Params): IFindOneRepairService.Result {
    const Repair = await this.RepairRepository.findOne(params)

    return Repair
  }
}
