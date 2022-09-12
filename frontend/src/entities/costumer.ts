export interface ICostumer {
  _id: string
  name: string
  email: string
}

export interface ICreateCostumer {
  name: string
  email: string
}

export interface IUpdateCostumer {
  name: string
  email: string
  id: string
}

export interface ICostumerForm {
  id?: string
  name: string
  email: string
}
