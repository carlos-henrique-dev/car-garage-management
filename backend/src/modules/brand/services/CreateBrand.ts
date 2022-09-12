import { IBrandRepository, ICreateBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateBrandService implements ICreateBrandService {
  private BrandRepository: IBrandRepository

  constructor(
    @inject('BrandRepository')
    BrandRepository: IBrandRepository
  ) {
    this.BrandRepository = BrandRepository
  }

  async execute(data: ICreateBrandService.Params): ICreateBrandService.Result {
    const BrandAlreadyExists = await this.BrandRepository.findOne({ name: data.name.trim() })

    if (BrandAlreadyExists) {
      throw new Error('A Brand with this name already exists')
    }

    const Brand = await this.BrandRepository.save(data)

    return Brand
  }
}
