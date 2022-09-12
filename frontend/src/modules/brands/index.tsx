import { Button, Container, Divider, Group } from '@mantine/core'
import { Table } from '../../components/Table'
import { IBrand } from '../../entities'
import { useFetchBrands, useManageBrands } from '../../hooks'
import ManageBrand from './components/manage-brand'
import { useBrandModalState } from './state/brand-modal-state'
import { FormValues } from './types/form'
import { ActionIcon } from '@mantine/core'
import { IconCircleOff, IconEdit } from '@tabler/icons'

function Brands() {
  const { brands, loading, updateList, clearDisabled } = useFetchBrands()
  const { save: saveBrand, loading: savingBrand, disable: disableBrand } = useManageBrands()

  const { openModal, closeModal, setCurrentBrand } = useBrandModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: IBrand) => {
    openModal('edit')
    setCurrentBrand(record)
  }

  const handleSaveBrand = async (values: FormValues) => {
    const result = await saveBrand(values)
    updateList(result)
    closeModal()
  }

  const handleDisableBrand = async (record: IBrand) => {
    await disableBrand(record._id)

    clearDisabled(record._id)
  }

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Create Brand</Button>
      </Group>

      <Divider my="sm" />

      <Table<IBrand>
        data={brands}
        columns={[
          { key: 'name', label: 'Name' },
          {
            key: '',
            label: 'Actions',
            render: (value, record) => (
              <Group position="right">
                <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
                  <IconEdit color="#00abfb" />
                </ActionIcon>
                <ActionIcon onClick={() => handleDisableBrand(record)} color="red">
                  <IconCircleOff />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        loading={loading}
      />

      <ManageBrand loading={loading || savingBrand} onSave={handleSaveBrand} />
    </Container>
  )
}

export default Brands
