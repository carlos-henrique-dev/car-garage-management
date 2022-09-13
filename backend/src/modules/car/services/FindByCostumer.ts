import { ICarRepository } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IFindCarsByCostumerService } from '../interfaces/IFindCarsByCostumerService'

@injectable()
export class FindByCostumerService implements IFindCarsByCostumerService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(params: IFindCarsByCostumerService.Params): IFindCarsByCostumerService.Result {
    return this.CarRepository.find(params)
  }
}
