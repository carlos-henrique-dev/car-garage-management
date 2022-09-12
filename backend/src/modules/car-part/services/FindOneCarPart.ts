import { ICarPartRepository, IFindOneCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneCarPartService implements IFindOneCarPartService {
  private CarPartRepository: ICarPartRepository

  constructor(
    @inject('CarPartRepository')
    CarPartRepository: ICarPartRepository
  ) {
    this.CarPartRepository = CarPartRepository
  }

  async execute(params: IFindOneCarPartService.Params): IFindOneCarPartService.Result {
    const CarPart = await this.CarPartRepository.findOne(params)

    return CarPart
  }
}
