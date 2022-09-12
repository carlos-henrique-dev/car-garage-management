import { useEffect, useState } from 'react'
import { getBrands } from '../../data'
import { IBrand } from '../../entities'

export const useFetchBrands = () => {
  const [brands, setBrands] = useState<IBrand[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (brand?: IBrand) => {
    if (brand) {
      const newList = brands.reduce((accumulator, current) => {
        if (current._id === brand._id) {
          accumulator.push({ ...current, ...brand })
          return accumulator
        }

        accumulator.push(current)
        return accumulator
      }, [] as IBrand[])

      setBrands(newList)
    }
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
