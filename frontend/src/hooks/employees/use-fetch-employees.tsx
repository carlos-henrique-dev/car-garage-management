import { useEffect, useState } from 'react'
import { getEmployees } from '../../data'
import { IEmployee } from '../../entities'
import { updateOrInsert } from '../../utils/update-state'

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [loading, setLoading] = useState(false)

  const updateList = (employee: IEmployee) => {
    const newList = updateOrInsert({
      newElement: employee,
      list: employees,
      key: '_id',
    })

    setEmployees(newList)
  }

  const clearDisabled = (id: string) => {
    const newList = employees.filter(({ _id }) => _id !== id)

    setEmployees(newList)
  }

  useEffect(() => {
    async function fetchEmployees() {
      setLoading(true)

      const res = await getEmployees()

      setEmployees(res)
      setLoading(false)
    }

    fetchEmployees()
  }, [])

  return {
    employees,
    loading,
    updateList,
    clearDisabled,
  }
}
