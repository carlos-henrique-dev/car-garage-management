import { IRepairRepository, IUpdateRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateRepairService implements IUpdateRepairService {
  private RepairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.RepairRepository = RepairRepository
  }

  async execute(params: IUpdateRepairService.Params): IUpdateRepairService.Result {
    const { id, data } = params

    const Repair = await this.RepairRepository.findOne({ id: params.id })

    if (!Repair) {
      throw new Error('Repair not found')
    }

    return this.RepairRepository.update({ ...data, _id: id })
  }
}
