import API from '../configs/api'
import { ICreateRepair, IRepair, IUpdateRepair } from '../entities'

export const getRepairs = () => API.get<IRepair[]>('/repair').then(({ data }) => data)

export const createRepair = (params: ICreateRepair) => API.post<IRepair>('/repair', params).then(({ data }) => data)

export const updateRepair = (params: IUpdateRepair) => API.put<IRepair>(`/repair/${params.id}`, params).then(({ data }) => data)

export const disableRepair = (id: string) => API.delete(`/repair/${id}`)
