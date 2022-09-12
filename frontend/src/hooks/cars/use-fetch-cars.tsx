import { useEffect, useState } from 'react'
import { getCars } from '../../data'
import { ICar } from '../../entities'

export const useFetchCars = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [loading, setLoading] = useState(false)

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
  }
}
