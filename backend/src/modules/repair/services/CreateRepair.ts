import { IRepairRepository, ICreateRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateRepairService implements ICreateRepairService {
  private RepairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.RepairRepository = RepairRepository
  }

  async execute(data: ICreateRepairService.Params): ICreateRepairService.Result {
    const Repair = await this.RepairRepository.save(data)

    return Repair
  }
}
