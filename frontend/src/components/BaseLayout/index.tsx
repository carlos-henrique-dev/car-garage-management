import React from 'react'
import { AppShell } from '@mantine/core'
import { Header } from './header'
import { Navbar } from './navbar'

type Props = {
  children: React.ReactNode
}

function index({ children }: Props) {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )
}

export default index
