import API from '../configs/api'
import { IBrand, ICreateBrand, IUpdateBrand } from '../entities'

export const getBrands = () => API.get<IBrand[]>('/brand').then(({ data }) => data)

export const createBrand = (params: ICreateBrand) => API.post<IBrand>('/brand', params).then(({ data }) => data)

export const updateBrand = (params: IUpdateBrand) => API.put<IBrand>(`/brand/${params.id}`, params).then(({ data }) => data)

export const disableBrand = (id: string) => API.delete<IBrand>(`/brand/${id}`)
