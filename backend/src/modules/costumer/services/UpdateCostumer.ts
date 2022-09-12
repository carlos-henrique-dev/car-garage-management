import { ICostumerRepository, IUpdateCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCostumerService implements IUpdateCostumerService {
  private costumerRepository: ICostumerRepository

  constructor(
    @inject('CostumerRepository')
    costumerRepository: ICostumerRepository
  ) {
    this.costumerRepository = costumerRepository
  }

  async execute(params: IUpdateCostumerService.Params): IUpdateCostumerService.Result {
    const { id, data } = params

    const costumer = await this.costumerRepository.findOne({ id: params.id })

    if (!costumer) {
      throw new Error('Costumer not found')
    }

    return this.costumerRepository.update({ ...data, _id: id })
  }
}
