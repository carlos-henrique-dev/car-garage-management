import { ICostumerRepository, IFindCostumersService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCostumersService implements IFindCostumersService {
  private costumerRepository: ICostumerRepository

  constructor(
    @inject('CostumerRepository')
    costumerRepository: ICostumerRepository
  ) {
    this.costumerRepository = costumerRepository
  }

  async execute(): IFindCostumersService.Result {
    const costumers = await this.costumerRepository.find()

    return costumers
  }
}
