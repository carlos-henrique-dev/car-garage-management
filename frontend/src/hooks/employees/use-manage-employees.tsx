import { useState } from 'react'
import { createEmployee, updateEmployee, disableEmployee } from '../../data'
import { IEmployeeForm, IUpdateEmployee } from '../../entities'

export const useManageEmployees = () => {
  const [loading, setLoading] = useState(false)

  const save = async (values: IEmployeeForm) => {
    setLoading(true)

    let employee
    if (values.id) {
      employee = await updateEmployee(values as IUpdateEmployee)
    } else {
      employee = await createEmployee(values)
    }

    setLoading(false)
    return employee
  }

  const disable = async (id: string) => {
    return disableEmployee(id)
  }

  return {
    save,
    disable,
    loading,
  }
}
