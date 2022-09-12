import { useState } from 'react'
import { createRepair, updateRepair, disableRepair } from '../../data'
import { IRepairForm, IUpdateRepair } from '../../entities'

export const useManageRepairs = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: IRepairForm) => {
    setLoading(true)

    let repair
    if (values.id) {
      repair = await updateRepair(values as IUpdateRepair)
    } else {
      repair = await createRepair(values)
    }

    setLoading(false)
    return repair
  }

  const disable = async (id: string) => {
    return disableRepair(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
