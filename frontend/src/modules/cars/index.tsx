import { ActionIcon, Button, Container, Divider, Group } from '@mantine/core'
import { IconEdit, IconCircleOff } from '@tabler/icons'
import { useMemo } from 'react'
import { Table } from '../../components/Table'
import { ICar } from '../../entities'
import { useFetchBrands, useFetchCars, useFetchCostumers, useManageCars } from '../../hooks'
import ManageCar from './components/manage-car'
import { useCarModalState } from './state/car-modal-state'
import { FormValues } from './types/form'

function Cars() {
  const { cars, loading, updateList, clearDisabled } = useFetchCars()
  const { brands, loading: loadingBrands } = useFetchBrands()
  const { costumers, loading: loadingCostumers } = useFetchCostumers()

  const { save: saveCar, loading: savingCar, disable: disableCar } = useManageCars()

  const { openModal, closeModal, setCurrentCar } = useCarModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: ICar) => {
    openModal('edit')
    setCurrentCar(record)
  }

  const handleSaveCar = async (values: FormValues) => {
    const result = await saveCar(values)
    updateList(result)
    closeModal()
  }

  const handleDisableCar = async (record: ICar) => {
    await disableCar(record._id)

    clearDisabled(record._id)
  }

  const isLoading = useMemo(() => loading || savingCar || loadingBrands || loadingCostumers, [loading, savingCar, loadingBrands, loadingCostumers])

  const columns = useMemo(
    () => [
      { key: 'model', label: 'Model' },
      { key: 'registrationPlate', label: 'Registration Plate' },
      { key: 'brand.name', label: 'Brand' },
      { key: 'costumer.name', label: 'Owner' },
      {
        key: '',
        label: 'Actions',
        render: (value: any, record: ICar) => (
          <Group position="right">
            <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
              <IconEdit color="#00abfb" />
            </ActionIcon>
            <ActionIcon onClick={() => handleDisableCar(record)} color="red">
              <IconCircleOff />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [cars]
  )

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Create Car</Button>
      </Group>

      <Divider my="sm" />

      <Table<ICar> data={cars} columns={columns} loading={loading} />

      <ManageCar loading={isLoading} onSave={handleSaveCar} brands={brands} costumers={costumers} />
    </Container>
  )
}

export default Cars
