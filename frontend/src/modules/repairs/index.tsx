import { Container } from '@mantine/core'
import { Table } from '../../components/Table'
import { ICar, IRepair } from '../../entities'
import { useFetchRepairs } from '../../hooks'
import { parseDate } from '../../utils/parse-date'
import { parsePrice } from '../../utils/parse-value'
import { CarDetails } from './components'

function Repairs() {
  const { repairs, loading } = useFetchRepairs()

  return (
    <Container>
      <Table<IRepair>
        data={repairs}
        columns={[
          { key: 'costumer.name', label: 'Costumer' },
          { key: 'car', label: 'Car', render: (car: ICar) => <CarDetails car={car} /> },
          { key: 'occurrenceDate', label: 'Repaired At', render: (date: string) => parseDate(date) },
          { key: 'total', label: 'Total', render: (total: number) => parsePrice(total) },
        ]}
        loading={loading}
      />
    </Container>
  )
}

export default Repairs
