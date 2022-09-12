import API from '../configs/api'
import { ICreateProduct, IProduct, IUpdateProduct } from '../entities'

export const getProducts = () => API.get<IProduct[]>('/car-part').then(({ data }) => data)

export const createProduct = (params: ICreateProduct) => API.post<IProduct>('/car-part', params).then(({ data }) => data)

export const updateProduct = (params: IUpdateProduct) => API.put<IProduct>(`/car-part/${params.id}`, params).then(({ data }) => data)

export const disableProduct = (id: string) => API.delete(`/car-part/${id}`)
