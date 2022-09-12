import { createStyles } from '@mantine/core'
import { HEADER_HEIGHT } from './constants'

export const useHeaderStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  inner: {
    margin: 0,
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  },

  pageTitle: {
    marginLeft: 30,
  },
}))
