import { useEffect, useState } from 'react'
import { getCostumers } from '../../data'
import { ICostumer } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchCostumers = () => {
  const [costumers, setCostumers] = useState<ICostumer[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (costumer: ICostumer) => {
    const newList = updateOrInsert({
      newElement: costumer,
      list: costumers,
      key: '_id',
    })

    setCostumers(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = costumers.filter(({ _id }) => _id !== id)

    setCostumers(newList)
  }

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
    updateList,
    clearDisabled,
  }
}
