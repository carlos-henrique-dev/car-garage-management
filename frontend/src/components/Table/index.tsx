import { useEffect, useState } from 'react'
import { Table as MantineTable, ScrollArea, Text, TextInput, LoadingOverlay } from '@mantine/core'

import { sortData } from './utils'
import { TableProps } from './interfaces'
import { IconSearch } from '@tabler/icons'
import { Th } from './THeader'
import { resolveValue } from '../../utils/resolve-object'

export function Table<T>({ data, columns, loading = false }: TableProps<T>) {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState<({ _id: string } | T)[]>([])
  const [sortBy, setSortBy] = useState<keyof T | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  useEffect(() => {
    setSortedData(data)
  }, [data])

  const setSorting = (field: keyof T) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  const rows = sortedData.map((row: any) => (
    <tr key={row._id}>
      {columns.map((column, index) => {
        const value = resolveValue(column.key, row)

        const tdValue = column.render ? column.render(value, row, index) : value

        return <td key={column.key}>{tdValue}</td>
      })}
    </tr>
  ))

  const sortingOptions = columns.map((column) => (
    <Th sorted={sortBy === column.key} reversed={reverseSortDirection} onSort={() => setSorting(column.key as keyof T)} key={column.key}>
      {column.label}
    </Th>
  ))

  return (
    <ScrollArea>
      <LoadingOverlay visible={loading} overlayBlur={2} />

      <TextInput placeholder="Search by any field" mb="md" icon={<IconSearch size={14} stroke={1.5} />} value={search} onChange={handleSearchChange} />

      <MantineTable highlightOnHover horizontalSpacing="md" verticalSpacing="xs" sx={{ tableLayout: 'fixed', minWidth: 700 }}>
        {rows.length > 0 && (
          <thead>
            <tr>{sortingOptions}</tr>
          </thead>
        )}

        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={24}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </MantineTable>
    </ScrollArea>
  )
}
