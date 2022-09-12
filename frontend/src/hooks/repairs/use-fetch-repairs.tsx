import { useEffect, useState } from 'react'
import { getRepairs } from '../../data'
import { IRepair } from '../../entities'

export const useFetchRepairs = () => {
  const [repairs, setRepairs] = useState<IRepair[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchRepairs() {
      setLoading(true)

      const res = await getRepairs()

      setRepairs(res)
      setLoading(false)
    }

    fetchRepairs()
  }, [])

  return {
    repairs,
    loading,
  }
}
