import { EmployeeModel } from '../models'
import { IEmployeeRepository } from '../interfaces/IEmployeeRepository'
import { IEmployee } from '../interfaces'

export class EmployeeRepository implements IEmployeeRepository {
  async findOne(params: IEmployeeRepository.FindOneParams): IEmployeeRepository.FindOneResult {
    const { id: _id, email } = params

    return EmployeeModel.findOne({ ...(_id && { _id }), ...(email && { email }) })
  }

  async find(): IEmployeeRepository.FindResult {
    return EmployeeModel.find({ deletedAt: null })
  }

  save(data: IEmployee): IEmployeeRepository.SaveResult {
    return new Promise((resolve) => {
      const Employee = new EmployeeModel(data)

      Employee.save()

      resolve(Employee)
    })
  }

  update(data: IEmployeeRepository.UpdateParams): IEmployeeRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return EmployeeModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): IEmployeeRepository.DeleteResult {
    return new Promise((resolve) => EmployeeModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
