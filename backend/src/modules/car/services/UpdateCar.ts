import { ICarRepository, IUpdateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCarService implements IUpdateCarService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(params: IUpdateCarService.Params): IUpdateCarService.Result {
    const { id, data } = params

    const Car = await this.CarRepository.findOne({ id: params.id })

    if (!Car) {
      throw new Error('Car not found')
    }

    return this.CarRepository.update({ ...data, _id: id })
  }
}
