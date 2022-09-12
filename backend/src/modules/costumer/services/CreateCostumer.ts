import { ICostumerRepository, ICreateCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateCostumerService implements ICreateCostumerService {
  private costumerRepository: ICostumerRepository

  constructor(
    @inject('CostumerRepository')
    costumerRepository: ICostumerRepository
  ) {
    this.costumerRepository = costumerRepository
  }

  async execute(data: ICreateCostumerService.Params): ICreateCostumerService.Result {
    const costumerAlreadyExists = await this.costumerRepository.findOne({ email: data.email })

    if (costumerAlreadyExists) {
      throw new Error('A costumer with this email already exists')
    }

    const costumer = await this.costumerRepository.save(data)

    return costumer
  }
}
