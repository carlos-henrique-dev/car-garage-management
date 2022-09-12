import { useState } from 'react'
import { createCostumer, updateCostumer, disableCostumer } from '../../data'
import { ICostumerForm, IUpdateCostumer } from '../../entities'

export const useManageCostumers = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: ICostumerForm) => {
    setLoading(true)

    let costumer
    if (values.id) {
      costumer = await updateCostumer(values as IUpdateCostumer)
    } else {
      costumer = await createCostumer(values)
    }

    setLoading(false)
    return costumer
  }

  const disable = async (id: string) => {
    return disableCostumer(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
