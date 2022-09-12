import { ActionIcon, Button, Container, Divider, Group } from '@mantine/core'
import { IconCircleOff, IconEdit } from '@tabler/icons'
import { useMemo } from 'react'
import { Table } from '../../components/Table'
import { IEmployee } from '../../entities'
import { useFetchEmployees, useManageEmployees } from '../../hooks'
import { parseDate } from '../../utils/parse-date'
import ManageEmployee from './components/manage-employee'
import { useEmployeeModalState } from './state/employee-modal-state'
import { FormValues } from './types/form'

function Employees() {
  const { employees, loading, updateList, clearDisabled } = useFetchEmployees()

  const { save: saveEmployee, loading: savingEmployee, disable: disableEmployee } = useManageEmployees()

  const { openModal, closeModal, setCurrentEmployee } = useEmployeeModalState()

  const handleOpenOnCreateMode = () => openModal('create')
  const handleOpenOnEditMode = (record: IEmployee) => {
    openModal('edit')
    setCurrentEmployee(record)
  }

  const handleSaveEmployee = async (values: FormValues) => {
    const result = await saveEmployee(values)
    updateList(result)
    closeModal()
  }

  const handleDisableEmployee = async (record: IEmployee) => {
    await disableEmployee(record._id)

    clearDisabled(record._id)
  }

  const columns = useMemo(
    () => [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'hiringDate', label: 'Hiring Date', render: (date: string) => parseDate(date) },
      {
        key: '',
        label: 'Actions',
        render: (value: any, record: IEmployee) => (
          <Group position="right">
            <ActionIcon onClick={() => handleOpenOnEditMode(record)}>
              <IconEdit color="#00abfb" />
            </ActionIcon>
            <ActionIcon onClick={() => handleDisableEmployee(record)} color="red">
              <IconCircleOff />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [employees]
  )

  return (
    <Container>
      <Group position="right" spacing="lg">
        <Button onClick={handleOpenOnCreateMode}>Create Employee</Button>
      </Group>

      <Divider my="sm" />

      <Table<IEmployee> data={employees} columns={columns} loading={loading} />

      <ManageEmployee loading={loading || savingEmployee} onSave={handleSaveEmployee} />
    </Container>
  )
}

export default Employees
