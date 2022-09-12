import { useEffect, useState } from 'react'
import { getProducts } from '../../data'
import { IProduct } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (product: IProduct) => {
    const newList = updateOrInsert({
      newElement: product,
      list: products,
      key: '_id',
    })

    setProducts(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = products.filter(({ _id }) => _id !== id)

    setProducts(newList)
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)

      const res = await getProducts()

      setProducts(res)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return {
    products,
    loading,
    updateList,
    clearDisabled,
  }
}
