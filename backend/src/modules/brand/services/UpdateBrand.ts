import { IBrandRepository, IUpdateBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateBrandService implements IUpdateBrandService {
  private BrandRepository: IBrandRepository

  constructor(
    @inject('BrandRepository')
    BrandRepository: IBrandRepository
  ) {
    this.BrandRepository = BrandRepository
  }

  async execute(params: IUpdateBrandService.Params): IUpdateBrandService.Result {
    const { id, data } = params

    const Brand = await this.BrandRepository.findOne({ id: params.id })

    if (!Brand) {
      throw new Error('Brand not found')
    }

    return this.BrandRepository.update({ ...data, _id: id })
  }
}
