import { Container } from '@mantine/core'
import { Table } from '../../components/Table'
import { IEmployee } from '../../entities'
import { useFetchEmployees } from '../../hooks'
import { parseDate } from '../../utils/parse-date'

function Employees() {
  const { employees, loading } = useFetchEmployees()

  return (
    <Container>
      <Table<IEmployee>
        data={employees}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'hiringDate', label: 'Hiring Date', render: (date: string) => parseDate(date) },
        ]}
        loading={loading}
      />
    </Container>
  )
}

export default Employees
