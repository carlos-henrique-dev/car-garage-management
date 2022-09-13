import { useEffect, useMemo, useState } from 'react'
import { useForm } from '@mantine/form'
import { Modal, Button, Group, Box, Select, MultiSelect, Textarea, Badge } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useRepairModalState } from '../state/repair-modal-state'
import { FormValues } from '../types/form'
import { ICar, ICostumer, IEmployee, IProduct } from '../../../entities'
import { parsePrice } from '../../../utils/parse-value'

type Props = {
  employees: IEmployee[]
  costumers: ICostumer[]
  products: IProduct[]
  cars: ICar[]
  loading: boolean
  onSave: (values: FormValues) => void
  fetchCostumerCars: (costumerId: string | null) => void
}

function ManageRepair({ loading, onSave, employees, costumers, products, cars, fetchCostumerCars }: Props) {
  const [selectedProducts, setProducts] = useState<string[]>([])
  const [selectedCostumer, setCostumer] = useState<string | null>(null)
  const [selectedCar, setCar] = useState<string | null>(null)

  const [totalPrice, setTotalPrice] = useState(0)

  const { opened, mode, currentRepair, closeModal } = useRepairModalState()
  const IsEditMode = mode === 'edit' && currentRepair

  const form = useForm<FormValues>({
    initialValues: {
      costumer: '',
      car: '',
      carParts: [],
      employee: '',
      occurrenceDate: new Date(),
      description: '',
      total: 0,
    },
  })

  const calculateTotal = (items: string[]) => {
    const filteredBySelection = products.filter((product) => items.includes(product._id))

    const sumPrices = filteredBySelection.reduce((acc, curr) => (acc = curr.price + acc), 0)

    setTotalPrice(sumPrices)
    form.setFieldValue('total', sumPrices)
  }

  const handleSelectProducts = (value: string[]) => {
    form.setFieldValue('carParts', value)
    setProducts(value)
    calculateTotal(value)
  }

  const handleSelectCostumer = (value: string) => {
    setCostumer(value)
    setCar(null)
    fetchCostumerCars(value)
  }

  useEffect(() => {
    if (IsEditMode) {
      fetchCostumerCars(currentRepair.costumer._id)

      setProducts(currentRepair.carParts.map(({ _id }) => _id))
      setCostumer(currentRepair.costumer._id)
      setCar(currentRepair.car._id)

      form.setFieldValue('employee', currentRepair.employee._id)
      form.setFieldValue('occurrenceDate', new Date(currentRepair.occurrenceDate))
      form.setFieldValue('description', currentRepair.description)
      form.setFieldValue('total', currentRepair.total)
    }

    return () => {
      setProducts([])
      setCostumer(null)
      setCar(null)
    }
  }, [IsEditMode])

  const handleSave = (values: FormValues) => {
    onSave({ ...values, car: String(selectedCar), carParts: selectedProducts, costumer: String(selectedCostumer), ...(IsEditMode && { id: currentRepair._id }) })
    form.reset()
  }

  const handleClose = () => {
    closeModal()
    form.reset()
  }

  const employeeOptions = useMemo(() => employees.map(({ _id, name }) => ({ value: _id, label: name })), [employees])
  const productsOptions = useMemo(() => products.map(({ _id, description, price }) => ({ value: _id, label: `${description} (${parsePrice(price)})` })), [products])
  const costumerOptions = useMemo(() => costumers.map(({ _id, name }) => ({ value: _id, label: name })), [costumers])
  const carOptions = useMemo(() => cars.map(({ _id, model, brand }) => ({ value: _id, label: `${model} / ${brand.name}` })), [cars])

  return (
    <Modal opened={opened} onClose={handleClose} title={`${mode === 'create' ? 'Register' : 'Edit'} Repair`} centered>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSave(values))}>
          <Select withAsterisk label="The employee in charge of the repair" placeholder="Select the employee" {...form.getInputProps('employee')} searchable nothingFound="No options" data={employeeOptions} />

          <Select withAsterisk label="Costumer" placeholder="Select the costumer" searchable nothingFound="No options" data={costumerOptions} value={selectedCostumer} onChange={handleSelectCostumer} />

          <Select withAsterisk label="Vehicle" placeholder="Select the costumer's vehicle" searchable nothingFound="No options" data={carOptions} value={selectedCar} onChange={setCar} />

          <MultiSelect
            withAsterisk
            value={selectedProducts}
            onChange={handleSelectProducts}
            data={productsOptions}
            label="Products used in the repair"
            placeholder="Select all that apply"
            maxDropdownHeight={160}
            searchable
            clearable
          />

          <DatePicker placeholder="Select the date the repair happened" label="Repair Date" withAsterisk {...form.getInputProps('occurrenceDate')} />

          <Textarea label="Description" placeholder="Additional information about the repair" {...form.getInputProps('description')} />

          <Group position="apart" mt="md">
            <Badge color="green" size="lg" radius="md">{`Total: ${parsePrice(totalPrice)}`}</Badge>

            <Button loading={loading} type="submit">
              Save
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  )
}

export default ManageRepair
