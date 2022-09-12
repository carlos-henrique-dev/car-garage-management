import { Container } from '@mantine/core'
import { Table } from '../../components/Table'
import { ICar } from '../../entities'
import { useFetchCars } from '../../hooks'

function Cars() {
  const { cars, loading } = useFetchCars()

  return (
    <Container>
      <Table<ICar>
        data={cars}
        columns={[
          { key: 'model', label: 'Model' },
          { key: 'registrationPlate', label: 'Registration Plate' },
          { key: 'brand.name', label: 'Brand' },
          { key: 'costumer.name', label: 'Owner' },
        ]}
        loading={loading}
      />
    </Container>
  )
}

export default Cars
