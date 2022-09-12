import { Request, Response } from 'express'
import { IUpdateCarDTO } from '../dtos'
import { IDeleteCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCarController {
  private deleteCarService: IDeleteCarService

  constructor(
    @inject('DeleteCarService')
    deleteCarService: IDeleteCarService
  ) {
    this.deleteCarService = deleteCarService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteCarService.execute({ id })

      return res.status(201).json({ message: 'Car deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
