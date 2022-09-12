import API from '../configs/api'
import { IEmployee } from '../entities'

export const getEmployees = () => API.get<IEmployee[]>('/employee').then(({ data }) => data)
