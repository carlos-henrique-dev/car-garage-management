import { Request, Response } from 'express'
import { IUpdateBrandDTO } from '../dtos'
import { IUpdateBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateBrandController {
  private updateBrandService: IUpdateBrandService

  constructor(
    @inject('UpdateBrandService')
    updateBrandService: IUpdateBrandService
  ) {
    this.updateBrandService = updateBrandService
  }

  async handle(req: Request<{ id: string }, IUpdateBrandDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name } = req.body

      const brand = await this.updateBrandService.execute({ data: { name }, id })

      return res.status(201).json(brand)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
