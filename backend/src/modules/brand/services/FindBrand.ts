import { IBrandRepository, IFindBrandsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindBrandsService implements IFindBrandsService {
  private BrandRepository: IBrandRepository

  constructor(
    @inject('BrandRepository')
    BrandRepository: IBrandRepository
  ) {
    this.BrandRepository = BrandRepository
  }

  async execute(): IFindBrandsService.Result {
    const Brands = await this.BrandRepository.find()

    return Brands
  }
}
