import API from '../configs/api'
import { ICostumer } from '../entities'

export const getCostumers = () => API.get<ICostumer[]>('/costumer').then(({ data }) => data)
