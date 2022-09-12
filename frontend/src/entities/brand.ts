export interface IBrand {
  _id: string
  name: string
  deletedAt?: Date
}

export interface ICreateBrand {
  name: string
}

export interface IUpdateBrand {
  name: string
  id: string
}

export interface IBrandForm {
  id?: string
  name: string
}
