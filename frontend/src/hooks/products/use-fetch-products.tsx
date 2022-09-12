import { useEffect, useState } from 'react'
import { getProducts } from '../../data'
import { IProduct } from '../../entities'

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

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
  }
}
