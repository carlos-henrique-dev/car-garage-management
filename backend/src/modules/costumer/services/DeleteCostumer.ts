import { ICostumerRepository, IDeleteCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCostumerService implements IDeleteCostumerService {
  private costumerRepository: ICostumerRepository

  constructor(
    @inject('CostumerRepository')
    costumerRepository: ICostumerRepository
  ) {
    this.costumerRepository = costumerRepository
  }

  async execute(params: IDeleteCostumerService.Params): IDeleteCostumerService.Result {
    const { id } = params

    const costumer = await this.costumerRepository.findOne({ id: params.id })

    if (!costumer) {
      throw new Error('Costumer not found')
    }

    return this.costumerRepository.delete(id)
  }
}
