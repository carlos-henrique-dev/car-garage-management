import { CarPartModel } from '../models'
import { ICarPartRepository } from '../interfaces/ICarPartRepository'
import { ICarPart } from '../interfaces'

export class CarPartRepository implements ICarPartRepository {
  async findOne(params: ICarPartRepository.FindOneParams): ICarPartRepository.FindOneResult {
    const { id: _id, code } = params

    return CarPartModel.findOne({ ...(_id && { _id }), ...(code && { code }) })
  }

  async find(): ICarPartRepository.FindResult {
    return CarPartModel.find({ deletedAt: null })
  }

  save(data: ICarPart): ICarPartRepository.SaveResult {
    return new Promise(async (resolve) => {
      const CarPart = new CarPartModel(data)

      await CarPart.save()

      resolve(CarPart)
    })
  }

  update(data: ICarPartRepository.UpdateParams): ICarPartRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return CarPartModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): ICarPartRepository.DeleteResult {
    return new Promise((resolve) => CarPartModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
