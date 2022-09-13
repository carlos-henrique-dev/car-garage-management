import { CarModel } from '../models'
import { ICarRepository } from '../interfaces/ICarRepository'
import { ICar } from '../interfaces'

export class CarRepository implements ICarRepository {
  private POPULATE_FIELDS = ['brand', 'costumer']

  async findOne(params: ICarRepository.FindOneParams): ICarRepository.FindOneResult {
    const { id: _id, registrationPlate } = params

    const query = { ...(_id && { _id }), ...(registrationPlate && { registrationPlate }) }

    return CarModel.findOne(query).populate(this.POPULATE_FIELDS)
  }

  async find(params: ICarRepository.FindParams): ICarRepository.FindResult {
    return CarModel.find({ deletedAt: null, ...params }).populate(this.POPULATE_FIELDS)
  }

  save(data: ICar): ICarRepository.SaveResult {
    return new Promise(async (resolve) => {
      const Car = new CarModel(data)

      await Car.save()

      resolve(Car)
    })
  }

  update(data: ICarRepository.UpdateParams): ICarRepository.UpdateResult {
    return new Promise((resolve) => {
      const { _id, ...rest } = data
      console.log('rest', rest)

      return CarModel.findOneAndUpdate({ _id }, { $set: { ...rest } }, { new: true }, (_, doc) => {
        resolve(doc)
      }).populate(this.POPULATE_FIELDS)
    })
  }

  delete(id: string): ICarRepository.DeleteResult {
    return new Promise((resolve) => CarModel.findOneAndUpdate({ _id: id }, { $set: { deletedAt: new Date() } }, undefined, () => resolve(true)))
  }
}
