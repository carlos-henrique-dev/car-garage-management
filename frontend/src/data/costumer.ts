import API from '../configs/api'
import { ICostumer, ICreateCostumer, IUpdateCostumer } from '../entities'

export const getCostumers = () => API.get<ICostumer[]>('/costumer').then(({ data }) => data)

export const createCostumer = (params: ICreateCostumer) => API.post<ICostumer>('/costumer', params).then(({ data }) => data)

export const updateCostumer = (params: IUpdateCostumer) => API.put<ICostumer>(`/costumer/${params.id}`, params).then(({ data }) => data)

export const disableCostumer = (id: string) => API.delete(`/costumer/${id}`)
