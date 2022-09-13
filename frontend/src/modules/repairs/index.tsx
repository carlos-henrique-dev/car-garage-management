import { ActionIcon, Button, Container, Divider, Group } from '@mantine/core'
import { IconCircleOff, IconEdit } from '@tabler/icons'
import { useMemo } from 'react'
import { Table } from '../../components/Table'
import { ICar, IRepair } from '../../entities'
import { useFetchCostumers, useFetchProducts, useFetchRepairs, useManageRepairs, useFetchCostumerCars, useFetchEmployees } from '../../hooks'
import { parseDate } from '../../utils/parse-date'
import { parsePrice } from '../../utils/parse-value'
import { CarDetails } from './components'
import ManageRepair from './components/manage-repair'
import { useRepairModalState } from './state/repair-modal-state'
import { FormValues } from './types/form'

function Repairs() {
  const { repairs, loading, updateList, clearDisabled } = useFetchRepairs()
  const { costumers, loading: loadingCostumers } = useFetchCostumers()
  const { products, loading: loadingProducts } = useFetchProducts()
  const { employees, loading: loadingEmployees } = useFetchEmployees()
  const { cars, loading: loadingCars, getCars } = useFetchCostumerCars()

  const { save: saveCar, loading: savingCar, disable: disableCar } = useManageRepairs()

  const { openModal, closeModal, setCurrentRepair } = useRepairModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: IRepair) => {
    openModal('edit')
    setCurrentRepair(record)
  }

  const handleFetchCostumerCars = (costumerId: string | null) => getCars(costumerId)

  const handleSaveCar = async (values: FormValues) => {
    const result = await saveCar(values)
    updateList(result)
    closeModal()
  }

  const handleDisableRepair = async (record: IRepair) => {
    await disableCar(record._id)

    clearDisabled(record._id)
  }

  const isLoading = useMemo(() => loading || savingCar || loadingCostumers || loadingProducts || loadingCars || loadingEmployees, [loading, savingCar, loadingCostumers, loadingProducts, loadingCars, loadingEmployees])

  const columns = useMemo(
    () => [
      { key: 'costumer.name', label: 'Costumer' },
      { key: 'car', label: 'Car', render: (car: ICar) => <CarDetails car={car} /> },
      { key: 'occurrenceDate', label: 'Repaired At', render: (date: string) => parseDate(date) },
      { key: 'total', label: 'Total', render: (total: number) => parsePrice(total) },
      {
        key: '',
        label: 'Actions',
        render: (value: any, record: IRepair) => (
          <Group position="right">
            <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
              <IconEdit color="#00abfb" />
            </ActionIcon>
            <ActionIcon onClick={() => handleDisableRepair(record)} color="red">
              <IconCircleOff />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [repairs]
  )

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Register Repair</Button>
      </Group>

      <Divider my="sm" />

      <Table<IRepair> data={repairs} columns={columns} loading={loading} />

      <ManageRepair loading={isLoading} onSave={handleSaveCar} costumers={costumers} employees={employees} products={products} cars={cars} fetchCostumerCars={handleFetchCostumerCars} />
    </Container>
  )
}

export default Repairs
