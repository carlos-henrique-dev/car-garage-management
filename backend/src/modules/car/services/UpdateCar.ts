import { ICarRepository, IUpdateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCarService implements IUpdateCarService {
  private carRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.carRepository = CarRepository
  }

  async execute(params: IUpdateCarService.Params): IUpdateCarService.Result {
    const { id, data } = params

    const car = await this.carRepository.findOne({ id: params.id })

    if (!car) {
      throw new Error('Car not found')
    }

    return this.carRepository.update({ ...data, _id: id })
  }
}
