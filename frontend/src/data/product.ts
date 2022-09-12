import API from '../configs/api'
import { IProduct } from '../entities'

export const getProducts = () => API.get<IProduct[]>('/car-part').then(({ data }) => data)
