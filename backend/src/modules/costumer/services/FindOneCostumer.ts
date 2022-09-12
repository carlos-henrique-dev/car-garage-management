import { ICostumerRepository, IFindOneCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneCostumerService implements IFindOneCostumerService {
  private costumerRepository: ICostumerRepository

  constructor(
    @inject('CostumerRepository')
    costumerRepository: ICostumerRepository
  ) {
    this.costumerRepository = costumerRepository
  }

  async execute(data: IFindOneCostumerService.Params): IFindOneCostumerService.Result {
    const costumer = await this.costumerRepository.findOne(data)

    return costumer
  }
}
