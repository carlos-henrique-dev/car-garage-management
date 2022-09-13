import API from '../configs/api'
import { ICar, ICreateCar, IUpdateCar } from '../entities/car'

export const getCars = () => API.get<ICar[]>('/car').then(({ data }) => data)

export const createCar = (params: ICreateCar) => API.post<ICar>('/car', params).then(({ data }) => data)

export const updateCar = (params: IUpdateCar) => API.put<ICar>(`/car/${params.id}`, params).then(({ data }) => data)

export const disableCar = (id: string) => API.delete(`/car/${id}`)

export const getCostumerCars = (costumerId: string) => API.get<ICar[]>(`/costumer-car/${costumerId}`).then(({ data }) => data)
