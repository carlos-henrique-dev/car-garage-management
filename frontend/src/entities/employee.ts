export interface IEmployee {
  _id: string
  name: string
  email: string
  hiringDate: Date
  deletedAt?: Date
}

export interface ICreateEmployee {
  name: string
  email: string
  hiringDate: Date
}

export interface IUpdateEmployee {
  id: string
  name: string
  email: string
  hiringDate: Date
}

export interface IEmployeeForm {
  id?: string
  name: string
  email: string
  hiringDate: Date
}
