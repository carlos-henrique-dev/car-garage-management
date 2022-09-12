import API from '../configs/api'
import { ICreateEmployee, IEmployee, IUpdateEmployee } from '../entities'

export const getEmployees = () => API.get<IEmployee[]>('/employee').then(({ data }) => data)

export const createEmployee = (params: ICreateEmployee) => API.post<IEmployee>('/employee', params).then(({ data }) => data)

export const updateEmployee = (params: IUpdateEmployee) => API.put<IEmployee>(`/employee/${params.id}`, params).then(({ data }) => data)

export const disableEmployee = (id: string) => API.delete(`/employee/${id}`)
