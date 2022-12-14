import { ICarRepository, IFindOneCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneCarService implements IFindOneCarService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(params: IFindOneCarService.Params): IFindOneCarService.Result {
    return this.CarRepository.findOne(params)
  }
}
