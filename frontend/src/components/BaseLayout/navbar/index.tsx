import { useState } from 'react'
import { Navbar as MantineNavBar } from '@mantine/core'
import { IconChartBar, IconUsers, IconBrandBootstrap, IconBarcode, IconCarCrash, IconReceipt2, IconId } from '@tabler/icons'
import { useNavBarStyles } from './styles'
import { Link } from 'react-router-dom'
import { useHeaderState } from '../../../state/header'

const data = [
  { link: '/', label: 'Dashboard', icon: IconChartBar },
  { link: '/repairs', label: 'Repairs', icon: IconReceipt2 },
  { link: '/employees', label: 'Employees', icon: IconId },
  { link: '/costumers', label: 'Costumers', icon: IconUsers },
  { link: '/products', label: 'Products', icon: IconBarcode },
  { link: '/cars', label: 'Cars', icon: IconCarCrash },
  { link: '/brands', label: 'Brands', icon: IconBrandBootstrap },
]

export function Navbar() {
  const { classes, cx } = useNavBarStyles()
  const [active, setActive] = useState('Dashboard')
  const changeTitle = useHeaderState((state) => state.changeTitle)

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label)
        changeTitle(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <MantineNavBar width={{ sm: 250 }} p="md" className={classes.navbar}>
      <MantineNavBar.Section grow>{links}</MantineNavBar.Section>
    </MantineNavBar>
  )
}
