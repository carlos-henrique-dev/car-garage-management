import { ActionIcon, Button, Container, Divider, Group } from '@mantine/core'
import { Table } from '../../components/Table'
import { useFetchCostumers, useManageCostumers } from '../../hooks'
import { ICostumer } from '../../entities'
import ManageCostumer from './components/manage-costumer'
import { IconCircleOff, IconEdit } from '@tabler/icons'
import { FormValues } from './types/form'
import { useMemo } from 'react'
import { useCostumerModalState } from './state/costumer-modal-state'

function Costumers() {
  const { costumers, loading, updateList, clearDisabled } = useFetchCostumers()

  const { save: saveCostumer, loading: savingCostumer, disable: disableCostumer } = useManageCostumers()

  const { openModal, closeModal, setCurrentCostumer } = useCostumerModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: ICostumer) => {
    openModal('edit')
    setCurrentCostumer(record)
  }

  const handleSaveCostumer = async (values: FormValues) => {
    const result = await saveCostumer(values)
    updateList(result)
    closeModal()
  }

  const handleDisableCostumer = async (record: ICostumer) => {
    await disableCostumer(record._id)

    clearDisabled(record._id)
  }

  const columns = useMemo(
    () => [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      {
        key: '',
        label: 'Actions',
        render: (value: any, record: ICostumer) => (
          <Group position="right">
            <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
              <IconEdit color="#00abfb" />
            </ActionIcon>
            <ActionIcon onClick={() => handleDisableCostumer(record)} color="red">
              <IconCircleOff />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [costumers]
  )

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Create Costumer</Button>
      </Group>

      <Divider my="sm" />

      <Table<ICostumer> data={costumers} columns={columns} loading={loading} />

      <ManageCostumer loading={loading || savingCostumer} onSave={handleSaveCostumer} />
    </Container>
  )
}

export default Costumers
