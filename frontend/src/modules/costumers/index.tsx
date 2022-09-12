import { Container } from '@mantine/core'
import { Table } from '../../components/Table'

import { useFetchCostumers } from '../../hooks'
import { ICostumer } from '../../entities'

function Costumers() {
  const { costumers, loading } = useFetchCostumers()

  return (
    <Container>
      <Table<ICostumer>
        data={costumers}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
        ]}
        loading={loading}
      />
    </Container>
  )
}

export default Costumers
