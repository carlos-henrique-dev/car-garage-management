import { Request, Response } from 'express'
import { IFindBrandsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindBrandsController {
  private findBrandsService: IFindBrandsService

  constructor(
    @inject('FindBrandService')
    findBrandsService: IFindBrandsService
  ) {
    this.findBrandsService = findBrandsService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Brand = await this.findBrandsService.execute()

      return res.status(200).json({ Brand })
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
