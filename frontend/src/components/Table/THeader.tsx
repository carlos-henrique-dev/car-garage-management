import { UnstyledButton, Group, Center, Text } from '@mantine/core'
import { IconChevronUp, IconChevronDown, IconSelector } from '@tabler/icons'
import { ThProps } from './interfaces'
import { useTableStyles } from './styles'

export function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useTableStyles()

  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector

  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  )
}
