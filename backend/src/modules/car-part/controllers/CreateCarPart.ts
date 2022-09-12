import { Request, Response } from 'express'
import { ICreateCarPartDTO } from '../dtos'
import { ICreateCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class CreateCarPartController {
  private createCarPartService: ICreateCarPartService

  constructor(
    @inject('CreateCarPartService')
    createCarPartService: ICreateCarPartService
  ) {
    this.createCarPartService = createCarPartService
  }

  async handle(req: IRequest<ICreateCarPartDTO>, res: Response): Promise<Response> {
    try {
      const { code, description, price } = req.body

      const carPart = await this.createCarPartService.execute({ code, description, price })

      return res.status(201).json(carPart)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
