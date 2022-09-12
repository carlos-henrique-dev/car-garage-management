import { ActionIcon, Button, Container, Divider, Group } from '@mantine/core'
import { IconEdit, IconCircleOff } from '@tabler/icons'
import { useMemo } from 'react'
import { Table } from '../../components/Table'
import { IProduct } from '../../entities'
import { useFetchProducts, useManageProducts } from '../../hooks'
import { parsePrice } from '../../utils/parse-value'
import ManageProduct from './components/manage-product'
import { useProductModalState } from './state/product-modal-state'
import { FormValues } from './types/form'

function Products() {
  const { products, loading, updateList, clearDisabled } = useFetchProducts()

  const { save: saveCar, loading: savingProduct, disable: disableProduct } = useManageProducts()

  const { openModal, closeModal, setCurrentProduct } = useProductModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: IProduct) => {
    openModal('edit')
    setCurrentProduct(record)
  }

  const handleSaveProduct = async (values: FormValues) => {
    const result = await saveCar(values)
    updateList(result)
    closeModal()
  }

  const handleDisableProduct = async (record: IProduct) => {
    await disableProduct(record._id)

    clearDisabled(record._id)
  }

  const columns = useMemo(
    () => [
      { key: 'code', label: 'Code' },
      { key: 'description', label: 'Description' },
      { key: 'price', label: 'Price', render: (price: number) => parsePrice(price) },
      {
        key: '',
        label: 'Actions',
        render: (value: any, record: IProduct) => (
          <Group position="right">
            <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
              <IconEdit color="#00abfb" />
            </ActionIcon>
            <ActionIcon onClick={() => handleDisableProduct(record)} color="red">
              <IconCircleOff />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [products]
  )

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Create Product</Button>
      </Group>

      <Divider my="sm" />

      <Table<IProduct> data={products} columns={columns} loading={loading} />

      <ManageProduct loading={loading || savingProduct} onSave={handleSaveProduct} />
    </Container>
  )
}

export default Products
