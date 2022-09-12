export interface IProduct {
  _id: string
  code: string
  description: string
  price: number
  deletedAt?: Date
}

export interface ICreateProduct {
  code: string
  description: string
  price: number
}

export interface IUpdateProduct {
  id: string
  code: string
  description: string
  price: number
}

export interface IProductForm {
  id?: string
  code: string
  description: string
  price: number
}
