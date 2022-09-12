import { ICarRepository, IDeleteCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCarService implements IDeleteCarService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(params: IDeleteCarService.Params): IDeleteCarService.Result {
    const { id } = params

    const Car = await this.CarRepository.findOne({ id: params.id })

    if (!Car) {
      throw new Error('Car not found')
    }

    return this.CarRepository.delete(id)
  }
}
