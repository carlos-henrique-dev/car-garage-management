import API from '../configs/api'
import { IRepair } from '../entities'

export const getRepairs = () => API.get<IRepair[]>('/repair').then(({ data }) => data)
