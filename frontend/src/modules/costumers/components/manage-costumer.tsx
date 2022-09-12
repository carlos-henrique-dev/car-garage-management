import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, TextInput } from '@mantine/core'
import { useCostumerModalState } from '../state/costumer-modal-state'
import { FormValues } from '../types/form'
import { useEffect } from 'react'

type Props = {
  loading: boolean
  onSave: (values: FormValues) => void
}

function ManageCostumer({ loading, onSave }: Props) {
  const { opened, mode, currentCostumer, closeModal } = useCostumerModalState()

  const IsEditMode = mode === 'edit' && currentCostumer

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
    },
  })

  useEffect(() => {
    if (IsEditMode) {
      form.setFieldValue('name', currentCostumer.name)
      form.setFieldValue('email', currentCostumer.email)
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, ...(IsEditMode && { id: currentCostumer._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Create a new' : 'Edit'} Costumer`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <TextInput withAsterisk label="Name" placeholder="Costumer name" {...form.getInputProps('name')} />

          <TextInput withAsterisk label="Email" placeholder="mail@mail.com" type="email" {...form.getInputProps('email')} />

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

export default ManageCostumer
