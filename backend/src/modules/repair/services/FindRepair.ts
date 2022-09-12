import { IRepairRepository, IFindRepairsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindRepairsService implements IFindRepairsService {
  private RepairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.RepairRepository = RepairRepository
  }

  async execute(): IFindRepairsService.Result {
    const Repairs = await this.RepairRepository.find()

    return Repairs
  }
}
