import { useEffect, useState } from 'react'
import { getRepairs } from '../../data'
import { IRepair } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchRepairs = () => {
  const [repairs, setRepairs] = useState<IRepair[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (repair: IRepair) => {
    const newList = updateOrInsert({
      newElement: repair,
      list: repairs,
      key: '_id',
    })

    setRepairs(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = repairs.filter(({ _id }) => _id !== id)

    setRepairs(newList)
  }

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
    updateList,
    clearDisabled,
  }
}
