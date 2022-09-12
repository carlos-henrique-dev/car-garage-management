import { ICarPartRepository, ICreateCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateCarPartService implements ICreateCarPartService {
  private CarPartRepository: ICarPartRepository

  constructor(
    @inject('CarPartRepository')
    CarPartRepository: ICarPartRepository
  ) {
    this.CarPartRepository = CarPartRepository
  }

  async execute(data: ICreateCarPartService.Params): ICreateCarPartService.Result {
    const CarPartAlreadyExists = await this.CarPartRepository.findOne({ code: data.code.trim() })

    if (CarPartAlreadyExists) {
      throw new Error('A CarPart with this name already exists')
    }

    const CarPart = await this.CarPartRepository.save(data)

    return CarPart
  }
}
