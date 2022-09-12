import API from '../configs/api'
import { ICar } from '../entities/car'

export const getCars = () => API.get<ICar[]>('/car').then(({ data }) => data)
