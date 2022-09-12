import { IEmployeeRepository, IFindEmployeesService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindEmployeesService implements IFindEmployeesService {
  private EmployeeRepository: IEmployeeRepository

  constructor(
    @inject('EmployeeRepository')
    EmployeeRepository: IEmployeeRepository
  ) {
    this.EmployeeRepository = EmployeeRepository
  }

  async execute(): IFindEmployeesService.Result {
    const Employees = await this.EmployeeRepository.find()

    return Employees
  }
}
