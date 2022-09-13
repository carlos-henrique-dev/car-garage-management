import { BrandModel } from '../models'
import { IBrandRepository } from '../interfaces/IBrandRepository'
import { IBrand } from '../interfaces'

export class BrandRepository implements IBrandRepository {
  async findOne(params: IBrandRepository.FindOneParams): IBrandRepository.FindOneResult {
    const { id: _id, name } = params

    return BrandModel.findOne({ ...(_id && { _id }), ...(name && { name }) })
  }

  async find(): IBrandRepository.FindResult {
    return BrandModel.find({ deletedAt: null })
  }

  save(data: IBrand): IBrandRepository.SaveResult {
    return new Promise(async (resolve) => {
      const Brand = new BrandModel(data)

      await Brand.save()

      resolve(Brand)
    })
  }

  update(data: IBrandRepository.UpdateParams): IBrandRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return BrandModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): IBrandRepository.DeleteResult {
    return new Promise((resolve) => BrandModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
