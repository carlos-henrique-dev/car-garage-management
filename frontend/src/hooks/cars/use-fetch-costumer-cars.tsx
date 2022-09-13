import { useState } from 'react'
import { getCostumerCars } from '../../data'
import { ICar } from '../../entities'

export const useFetchCostumerCars = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchCars(costumerId: string | null) {
    if (!costumerId) {
      setCars([])
      return
    }

    setLoading(true)

    const res = await getCostumerCars(costumerId)

    setCars(res)
    setLoading(false)
  }

  const getCars = (costumerId: string | null) => {
    fetchCars(costumerId)
  }

  return {
    cars,
    loading,
    getCars,
  }
}
