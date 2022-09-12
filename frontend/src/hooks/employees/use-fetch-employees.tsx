import { useEffect, useState } from 'react'
import { getEmployees } from '../../data'
import { IEmployee } from '../../entities'

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [loading, setLoading] = useState(false)

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
  }
}
