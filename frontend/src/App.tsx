import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { Router } from './routes'
import BaseLayout from './components/BaseLayout'

function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BaseLayout>
          <Router />
        </BaseLayout>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
