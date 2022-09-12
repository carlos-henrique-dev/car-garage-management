import { IEmployeeRepository, IUpdateEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateEmployeeService implements IUpdateEmployeeService {
  private EmployeeRepository: IEmployeeRepository

  constructor(
    @inject('EmployeeRepository')
    EmployeeRepository: IEmployeeRepository
  ) {
    this.EmployeeRepository = EmployeeRepository
  }

  async execute(params: IUpdateEmployeeService.Params): IUpdateEmployeeService.Result {
    const { id, data } = params

    const Employee = await this.EmployeeRepository.findOne({ id: params.id })

    if (!Employee) {
      throw new Error('Employee not found')
    }

    return this.EmployeeRepository.update({ ...data, _id: id })
  }
}
