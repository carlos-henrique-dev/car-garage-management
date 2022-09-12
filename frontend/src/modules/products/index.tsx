import { Container } from '@mantine/core'
import { Table } from '../../components/Table'
import { IProduct } from '../../entities'
import { useFetchProducts } from '../../hooks'
import { parsePrice } from '../../utils/parse-value'

function Products() {
  const { products, loading } = useFetchProducts()

  return (
    <Container>
      <Table<IProduct>
        data={products}
        columns={[
          { key: 'code', label: 'Code' },
          { key: 'description', label: 'Description' },
          { key: 'price', label: 'Price', render: (price: number) => parsePrice(price) },
        ]}
        loading={loading}
      />
    </Container>
  )
}

export default Products
