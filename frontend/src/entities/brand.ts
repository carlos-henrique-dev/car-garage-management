export interface IBrand {
  _id: string
  name: string
  deletedAt?: Date
}

export interface ICreateBrand {
  name: string
}

export interface IUpdateBrand {
  id: string
  name: string
}

export interface IBrandForm {
  id?: string
  name: string
}
