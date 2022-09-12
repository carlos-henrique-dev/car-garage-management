import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, TextInput, Select } from '@mantine/core'
import { useProductModalState } from '../state/product-modal-state'
import { FormValues } from '../types/form'
import { useEffect } from 'react'

type Props = {
  loading: boolean
  onSave: (values: FormValues) => void
}

function ManageProduct({ loading, onSave }: Props) {
  const { opened, mode, currentProduct, closeModal } = useProductModalState()

  const IsEditMode = mode === 'edit' && currentProduct

  const form = useForm<FormValues>({
    initialValues: {
      code: '',
      description: '',
      price: 0,
    },
  })

  useEffect(() => {
    if (IsEditMode) {
      form.setFieldValue('code', currentProduct.code)
      form.setFieldValue('description', currentProduct.description)
      form.setFieldValue('price', currentProduct.price)
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, ...(IsEditMode && { id: currentProduct._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Create a new' : 'Edit'} Product`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <TextInput withAsterisk label="Code" placeholder="Product code" {...form.getInputProps('code')} />

          <TextInput withAsterisk label="Description" placeholder="abc123" {...form.getInputProps('description')} />

          <TextInput withAsterisk label="Price" prefix="$" type="number" placeholder="abc123" {...form.getInputProps('price')} />

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

export default ManageProduct
