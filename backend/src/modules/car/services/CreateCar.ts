import { ICarRepository, ICreateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateCarService implements ICreateCarService {
  private CarRepository: ICarRepository

  constructor(
    @inject('CarRepository')
    CarRepository: ICarRepository
  ) {
    this.CarRepository = CarRepository
  }

  async execute(data: ICreateCarService.Params): ICreateCarService.Result {
    const CarAlreadyExists = await this.CarRepository.findOne({ registrationPlate: data.registrationPlate.trim() })

    if (CarAlreadyExists) {
      throw new Error('A Car with this Registration Plate already exists')
    }

    return this.CarRepository.save(data)
  }
}
