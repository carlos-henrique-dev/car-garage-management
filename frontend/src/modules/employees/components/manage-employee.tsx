import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, TextInput } from '@mantine/core'
import { useEmployeeModalState } from '../state/employee-modal-state'
import { FormValues } from '../types/form'
import { useEffect } from 'react'
import { DatePicker } from '@mantine/dates'

type Props = {
  loading: boolean
  onSave: (values: FormValues) => void
}

function ManageEmployee({ loading, onSave }: Props) {
  const { opened, mode, currentEmployee, closeModal } = useEmployeeModalState()

  const IsEditMode = mode === 'edit' && currentEmployee

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      hiringDate: new Date(),
    },
  })

  useEffect(() => {
    if (IsEditMode) {
      form.setFieldValue('name', currentEmployee.name)
      form.setFieldValue('email', currentEmployee.email)
      form.setFieldValue('hiringDate', new Date(currentEmployee.hiringDate))
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, ...(IsEditMode && { id: currentEmployee._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Create a new' : 'Edit'} Employee`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <TextInput withAsterisk label="Name" placeholder="Employee name" {...form.getInputProps('name')} />

          <TextInput withAsterisk label="Email" placeholder="mail@mail.com" type="email" {...form.getInputProps('email')} />

          <DatePicker placeholder="Select the date the employee was hired" label="Hiring Date" withAsterisk {...form.getInputProps('hiringDate')} />

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

export default ManageEmployee
