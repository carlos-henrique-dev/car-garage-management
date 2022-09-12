import { useState } from 'react'
import { createBrand, updateBrand, disableBrand } from '../../data'
import { IBrandForm, IUpdateBrand } from '../../entities'

export const useManageBrands = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: IBrandForm) => {
    setLoading(true)

    let brand
    if (values.id) {
      brand = await updateBrand(values as IUpdateBrand)
    } else {
      brand = await createBrand(values)
    }

    setLoading(false)
    return brand
  }

  const disable = async (id: string) => {
    return disableBrand(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
