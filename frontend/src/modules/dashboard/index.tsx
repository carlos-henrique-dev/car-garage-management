import { Container } from '@mantine/core'
import { LineChart } from './components/LineChart'
import { data } from './data'

function Dashboard() {
  return (
    <Container style={{ height: 400 }}>
      <LineChart data={data} />
    </Container>
  )
}

export default Dashboard
