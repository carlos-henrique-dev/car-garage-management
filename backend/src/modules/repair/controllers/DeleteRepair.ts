import { Request, Response } from 'express'
import { IUpdateRepairDTO } from '../dtos'
import { IDeleteRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteRepairController {
  private deleteRepairService: IDeleteRepairService

  constructor(
    @inject('DeleteRepairService')
    deleteRepairService: IDeleteRepairService
  ) {
    this.deleteRepairService = deleteRepairService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteRepairService.execute({ id })

      return res.status(201).json({ message: 'Repair deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
