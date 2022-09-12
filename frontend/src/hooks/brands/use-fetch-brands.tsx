import { useEffect, useState } from 'react'
import { getBrands } from '../../data'
import { IBrand } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchBrands = () => {
  const [brands, setBrands] = useState<IBrand[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (brand: IBrand) => {
    const newList = updateOrInsert({
      newElement: brand,
      list: brands,
      key: '_id',
    })

    setBrands(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = brands.filter(({ _id }) => _id !== id)

    setBrands(newList)
  }

  async function fetchBrands() {
    setLoading(true)

    const res = await getBrands()

    setBrands(res)
    setLoading(false)
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  return {
    brands,
    loading,
    updateList,
    clearDisabled,
  }
}
