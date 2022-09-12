import { Request, Response } from 'express'
import { ICreateBrandDTO } from '../dtos'
import { ICreateBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateBrandController {
  private createBrandService: ICreateBrandService

  constructor(
    @inject('CreateBrandService')
    createBrandService: ICreateBrandService
  ) {
    this.createBrandService = createBrandService
  }

  async handle(req: Request<ICreateBrandDTO>, res: Response): Promise<Response> {
    try {
      const { name } = req.body

      const brand = await this.createBrandService.execute({ name })

      return res.status(201).json(brand)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
