import { useEffect, useState } from 'react'
import { getCars } from '../../data'
import { ICar } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchCars = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (car: ICar) => {
    const newList = updateOrInsert({
      newElement: car,
      list: cars,
      key: '_id',
    })

    setCars(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = cars.filter(({ _id }) => _id !== id)

    setCars(newList)
  }

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)

      const res = await getCars()

      setCars(res)
      setLoading(false)
    }

    fetchCars()
  }, [])

  return {
    cars,
    loading,
    updateList,
    clearDisabled,
  }
}
