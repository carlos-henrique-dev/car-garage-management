import { CostumerModel } from '../models'
import { ICostumerRepository } from '../interfaces/ICostumerRepository'
import { ICostumer } from '../interfaces'

export class CostumerRepository implements ICostumerRepository {
  async findOne(params: ICostumerRepository.FindOneParams): ICostumerRepository.FindOneResult {
    const { id: _id, email } = params

    return CostumerModel.findOne({ ...(_id && { _id }), ...(email && { email }) })
  }

  async find(): ICostumerRepository.FindResult {
    return CostumerModel.find({ deletedAt: null })
  }

  save(data: ICostumer): ICostumerRepository.SaveResult {
    return new Promise(async (resolve) => {
      const costumer = new CostumerModel(data)

      await costumer.save()

      resolve(costumer)
    })
  }

  update(data: ICostumerRepository.UpdateParams): ICostumerRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return CostumerModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): ICostumerRepository.DeleteResult {
    return new Promise((resolve) => CostumerModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
