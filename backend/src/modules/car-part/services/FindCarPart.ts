import { ICarPartRepository, IFindCarPartsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarPartsService implements IFindCarPartsService {
  private CarPartRepository: ICarPartRepository

  constructor(
    @inject('CarPartRepository')
    CarPartRepository: ICarPartRepository
  ) {
    this.CarPartRepository = CarPartRepository
  }

  async execute(): IFindCarPartsService.Result {
    const CarParts = await this.CarPartRepository.find()

    return CarParts
  }
}
