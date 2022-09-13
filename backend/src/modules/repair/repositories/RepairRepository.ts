import { RepairModel } from '../models'
import { IRepairRepository } from '../interfaces/IRepairRepository'
import { IRepair } from '../interfaces'

export class RepairRepository implements IRepairRepository {
  private populateFields = ['costumer', { path: 'car', populate: { path: 'brand', model: 'Brand' } }, 'carParts', 'employee']

  async findOne(params: IRepairRepository.FindOneParams): IRepairRepository.FindOneResult {
    const { id: _id, registrationPlate } = params

    return RepairModel.findOne({ ...(_id && { _id }), ...(registrationPlate && { registrationPlate }) }).populate(this.populateFields)
  }

  async find(): IRepairRepository.FindResult {
    return RepairModel.find({ deletedAt: null }).populate(this.populateFields)
  }

  save(data: IRepair): IRepairRepository.SaveResult {
    return new Promise(async (resolve) => {
      const Repair = new RepairModel(data)

      await Repair.save()

      resolve(Repair)
    })
  }

  update(data: IRepairRepository.UpdateParams): IRepairRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return RepairModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): IRepairRepository.DeleteResult {
    return new Promise((resolve) => RepairModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
