import { IBrandRepository, IFindOneBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneBrandService implements IFindOneBrandService {
  private BrandRepository: IBrandRepository

  constructor(
    @inject('BrandRepository')
    BrandRepository: IBrandRepository
  ) {
    this.BrandRepository = BrandRepository
  }

  async execute(params: IFindOneBrandService.Params): IFindOneBrandService.Result {
    const Brand = await this.BrandRepository.findOne(params)

    return Brand
  }
}
