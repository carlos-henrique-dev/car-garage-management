export interface TableProps<T> {
  data: Array<{ _id: string } & T>
  columns: {
    key: string
    label: string
    render?: (value: any, record: T, index: number) => React.ReactNode
  }[]
  loading?: boolean
}

export interface ThProps {
  children: React.ReactNode
  reversed: boolean
  sorted: boolean
  onSort(): void
}
