import { Request, Response } from 'express'
import { IUpdateEmployeeDTO } from '../dtos'
import { IDeleteEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteEmployeeController {
  private deleteEmployeeService: IDeleteEmployeeService

  constructor(
    @inject('DeleteEmployeeService')
    deleteEmployeeService: IDeleteEmployeeService
  ) {
    this.deleteEmployeeService = deleteEmployeeService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteEmployeeService.execute({ id })

      return res.status(201).json({ message: 'Employee deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
