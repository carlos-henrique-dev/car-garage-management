import { Header as MantineHeader, Container, Title } from '@mantine/core'
import { useHeaderStyles } from './styles'
import { HEADER_HEIGHT } from './constants'
import { useHeaderState } from '../../../state/header'

export function Header() {
  const pageTitle = useHeaderState((state) => state.title)
  const { classes } = useHeaderStyles()

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.header}>
      <Container className={classes.inner}>
        <div style={{ color: '#fff' }}>
          <Title order={4}>Car Garage Management</Title>
        </div>

        <div style={{ color: '#fff' }} className={classes.pageTitle}>
          <Title order={4}>{pageTitle}</Title>
        </div>
      </Container>
    </MantineHeader>
  )
}
