import { CarModel } from '../models'
import { ICarRepository } from '../interfaces/ICarRepository'
import { ICar } from '../interfaces'

export class CarRepository implements ICarRepository {
  async findOne(params: ICarRepository.FindOneParams): ICarRepository.FindOneResult {
    const { id: _id, registrationPlate } = params

    return CarModel.findOne({ ...(_id && { _id }), ...(registrationPlate && { registrationPlate }) }).populate(['brand', 'costumer'])
  }

  async find(): ICarRepository.FindResult {
    return CarModel.find({ deletedAt: null }).populate(['brand', 'costumer'])
  }

  save(data: ICar): ICarRepository.SaveResult {
    return new Promise((resolve) => {
      const Car = new CarModel(data)

      Car.save()

      resolve(Car)
    })
  }

  update(data: ICarRepository.UpdateParams): ICarRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data

      return CarModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      })
    })
  }

  delete(id: string): ICarRepository.DeleteResult {
    return new Promise((resolve) => CarModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
