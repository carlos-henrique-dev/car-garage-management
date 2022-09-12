import { ICarRepository, IFindCarsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarsService implements IFindCarsService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(): IFindCarsService.Result {
    const Cars = await this.CarRepository.find()

    return Cars
  }
}
