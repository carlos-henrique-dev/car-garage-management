import { Request, Response } from 'express'
import { IUpdateEmployeeDTO } from '../dtos'
import { IUpdateEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateEmployeeController {
  private updateEmployeeService: IUpdateEmployeeService

  constructor(
    @inject('UpdateEmployeeService')
    updateEmployeeService: IUpdateEmployeeService
  ) {
    this.updateEmployeeService = updateEmployeeService
  }

  async handle(req: Request<{ id: string }, IUpdateEmployeeDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name, email, hiringDate } = req.body

      const Employee = await this.updateEmployeeService.execute({ data: { name, email, hiringDate }, id })

      return res.status(201).json(Employee)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}
