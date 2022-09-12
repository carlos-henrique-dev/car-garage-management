import { useEffect, useState } from 'react'
import { getCostumers } from '../../data'
import { ICostumer } from '../../entities'

export const useFetchCostumers = () => {
  const [costumers, setCostumers] = useState<ICostumer[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchCostumers() {
      setLoading(true)

      const res = await getCostumers()

      setCostumers(res)
      setLoading(false)
    }

    fetchCostumers()
  }, [])

  return {
    costumers,
    loading,
  }
}
