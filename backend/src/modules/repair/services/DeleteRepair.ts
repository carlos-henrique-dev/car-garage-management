import { IRepairRepository, IDeleteRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteRepairService implements IDeleteRepairService {
  private RepairRepository: IRepairRepository

  constructor(
    @inject('RepairRepository')
    RepairRepository: IRepairRepository
  ) {
    this.RepairRepository = RepairRepository
  }

  async execute(params: IDeleteRepairService.Params): IDeleteRepairService.Result {
    const { id } = params

    const Repair = await this.RepairRepository.findOne({ id: params.id })

    if (!Repair) {
      throw new Error('Repair not found')
    }

    return this.RepairRepository.delete(id)
  }
}
