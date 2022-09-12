import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, TextInput } from '@mantine/core'
import { useBrandModalState } from '../state/brand-modal-state'
import { FormValues } from '../types/form'
import { useEffect } from 'react'

type Props = {
  loading: boolean
  onSave: (values: FormValues) => void
}

function ManageBrand({ loading, onSave }: Props) {
  const { opened, mode, currentBrand, closeModal } = useBrandModalState()

  const IsEditMode = mode === 'edit' && currentBrand

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
    },
  })

  useEffect(() => {
    if (IsEditMode) {
      form.setFieldValue('name', currentBrand.name)
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, ...(IsEditMode && { id: currentBrand._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Create a new' : 'Edit'} Brand`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <TextInput withAsterisk label="Name" placeholder="Some brand name" {...form.getInputProps('name')} />

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

export default ManageBrand
