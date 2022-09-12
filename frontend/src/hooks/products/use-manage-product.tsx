import { useState } from 'react'
import { createProduct, updateProduct, disableProduct } from '../../data'
import { IProductForm, IUpdateProduct } from '../../entities'

export const useManageProducts = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: IProductForm) => {
    setLoading(true)

    let Product
    if (values.id) {
      Product = await updateProduct(values as IUpdateProduct)
    } else {
      Product = await createProduct(values)
    }

    setLoading(false)
    return Product
  }

  const disable = async (id: string) => {
    return disableProduct(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
