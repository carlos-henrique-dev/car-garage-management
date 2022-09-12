import { Request, Response } from 'express'
import { IFindOneBrandDTO } from '../dtos'
import { IFindOneBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindBrandByIdController {
  private findBrandService: IFindOneBrandService

  constructor(
    @inject('FindOneBrandService')
    findBrandService: IFindOneBrandService
  ) {
    this.findBrandService = findBrandService
  }

  async handle(req: Request<IFindOneBrandDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const brand = await this.findBrandService.execute({ id })

      return res.status(201).json(brand)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
