import { ICarPartRepository, IDeleteCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCarPartService implements IDeleteCarPartService {
  private CarPartRepository: ICarPartRepository

  constructor(
    @inject('CarPartRepository')
    CarPartRepository: ICarPartRepository
  ) {
    this.CarPartRepository = CarPartRepository
  }

  async execute(params: IDeleteCarPartService.Params): IDeleteCarPartService.Result {
    const { id } = params

    const CarPart = await this.CarPartRepository.findOne({ id: params.id })

    if (!CarPart) {
      throw new Error('Car Part not found')
    }

    return this.CarPartRepository.delete(id)
  }
}
