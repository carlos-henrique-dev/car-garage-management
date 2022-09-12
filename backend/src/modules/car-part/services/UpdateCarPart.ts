import { ICarPartRepository, IUpdateCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCarPartService implements IUpdateCarPartService {
  private CarPartRepository: ICarPartRepository

  constructor(
    @inject('CarPartRepository')
    CarPartRepository: ICarPartRepository
  ) {
    this.CarPartRepository = CarPartRepository
  }

  async execute(params: IUpdateCarPartService.Params): IUpdateCarPartService.Result {
    const { id, data } = params

    const CarPart = await this.CarPartRepository.findOne({ id: params.id })

    if (!CarPart) {
      throw new Error('Car Part not found')
    }

    return this.CarPartRepository.update({ ...data, price: Number(data.price), _id: id })
  }
}
