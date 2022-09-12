import { Request, Response } from 'express'
import { IUpdateBrandDTO } from '../dtos'
import { IDeleteBrandService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteBrandController {
  private deleteBrandService: IDeleteBrandService

  constructor(
    @inject('DeleteBrandService')
    deleteBrandService: IDeleteBrandService
  ) {
    this.deleteBrandService = deleteBrandService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteBrandService.execute({ id })

      return res.status(201).json({ message: 'Brand deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
