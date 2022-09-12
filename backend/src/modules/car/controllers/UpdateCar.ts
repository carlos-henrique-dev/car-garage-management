import { Request, Response } from 'express'
import { IUpdateCarDTO } from '../dtos'
import { IUpdateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCarController {
  private updateCarService: IUpdateCarService

  constructor(
    @inject('UpdateCarService')
    updateCarService: IUpdateCarService
  ) {
    this.updateCarService = updateCarService
  }

  async handle(req: Request<{ id: string }, IUpdateCarDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name } = req.body

      const Car = await this.updateCarService.execute({ data: { name }, id })

      return res.status(201).json(Car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
