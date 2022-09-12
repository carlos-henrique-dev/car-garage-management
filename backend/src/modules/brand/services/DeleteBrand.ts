import { IBrandRepository, IDeleteBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteBrandService implements IDeleteBrandService {
  private BrandRepository: IBrandRepository

  constructor(
    @inject('BrandRepository')
    BrandRepository: IBrandRepository
  ) {
    this.BrandRepository = BrandRepository
  }

  async execute(params: IDeleteBrandService.Params): IDeleteBrandService.Result {
    const { id } = params

    const Brand = await this.BrandRepository.findOne({ id: params.id })

    if (!Brand) {
      throw new Error('Brand not found')
    }

    return this.BrandRepository.delete(id)
  }
}
