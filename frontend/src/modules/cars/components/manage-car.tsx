import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, TextInput, Select } from '@mantine/core'
import { useCarModalState } from '../state/car-modal-state'
import { FormValues } from '../types/form'
import { useEffect, useMemo } from 'react'
import { IBrand, ICostumer } from '../../../entities'

type Props = {
  brands: IBrand[]
  costumers: ICostumer[]
  loading: boolean
  onSave: (values: FormValues) => void
}

function ManageCar({ loading, onSave, brands, costumers }: Props) {
  const { opened, mode, currentCar, closeModal } = useCarModalState()

  const IsEditMode = mode === 'edit' && currentCar

  const form = useForm<FormValues>({
    initialValues: {
      brand: '',
      costumer: '',
      model: '',
      registrationPlate: '',
    },
  })

  useEffect(() => {
    if (IsEditMode) {
      form.setFieldValue('model', currentCar.model)
      form.setFieldValue('registrationPlate', currentCar.registrationPlate)
      form.setFieldValue('brand', currentCar.brand._id)
      form.setFieldValue('costumer', currentCar.costumer._id)
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, ...(IsEditMode && { id: currentCar._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  const brandOptions = useMemo(() => brands.map(({ _id, name }) => ({ value: _id, label: name })), [brands])

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Create a new' : 'Edit'} Car`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <TextInput withAsterisk label="Model" placeholder="Some Car model" {...form.getInputProps('model')} />

          <Select withAsterisk label="The Brand of the vehicle" placeholder="Select the brand" {...form.getInputProps('brand')} searchable nothingFound="No options" data={brandOptions} />

          <TextInput withAsterisk label="Registration Plate" placeholder="abc123" {...form.getInputProps('registrationPlate')} />

          <Select
            withAsterisk
            label="The owner of the vehicle"
            placeholder="Select the owner"
            searchable
            nothingFound="No options"
            data={costumers.map(({ _id, name }) => ({ value: _id, label: name }))}
            {...form.getInputProps('costumer')}
          />

          <Group position="right" mt="md">
            <Button loading={loading} type="submit">
              Save
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  )
}

export default ManageCar
