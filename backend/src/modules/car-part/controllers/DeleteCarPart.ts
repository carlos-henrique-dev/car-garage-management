import { Request, Response } from 'express'
import { IUpdateCarPartDTO } from '../dtos'
import { IDeleteCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCarPartController {
  private deleteCarPartService: IDeleteCarPartService

  constructor(
    @inject('DeleteCarPartService')
    deleteCarPartService: IDeleteCarPartService
  ) {
    this.deleteCarPartService = deleteCarPartService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteCarPartService.execute({ id })

      return res.status(201).json({ message: 'CarPart deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
