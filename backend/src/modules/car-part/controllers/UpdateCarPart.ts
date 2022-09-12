import { Request, Response } from 'express'
import { IUpdateCarPartDTO } from '../dtos'
import { IUpdateCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCarPartController {
  private updateCarPartService: IUpdateCarPartService

  constructor(
    @inject('UpdateCarPartService')
    updateCarPartService: IUpdateCarPartService
  ) {
    this.updateCarPartService = updateCarPartService
  }

  async handle(req: Request<{ id: string }, IUpdateCarPartDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { code, description, price } = req.body

      const carPart = await this.updateCarPartService.execute({ data: { code, description, price }, id })

      return res.status(201).json(carPart)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
