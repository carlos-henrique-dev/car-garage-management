import { useState } from 'react'
import { createCar, updateCar, disableCar } from '../../data'
import { ICarForm, IUpdateCar } from '../../entities'

export const useManageCars = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: ICarForm) => {
    setLoading(true)

    let car

    if (values.id) {
      car = await updateCar(values as IUpdateCar)
    } else {
      car = await createCar(values)
    }

    setLoading(false)
    return car
  }

  const disable = async (id: string) => {
    return disableCar(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
