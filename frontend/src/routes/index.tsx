import { useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Brands from '../modules/brands'
import Cars from '../modules/cars'
import Costumers from '../modules/costumers'
import Dashboard from '../modules/dashboard'
import Employees from '../modules/employees'
import Products from '../modules/products'
import Repairs from '../modules/repairs'

const ROUTES = [
  {
    key: '@dashboard',
    isIndex: true,
    path: '/',
    element: <Dashboard />,
  },
  {
    key: '@repairs',
    isIndex: false,
    path: 'repairs',
    element: <Repairs />,
  },
  {
    key: '@employees',
    isIndex: false,
    path: 'employees',
    element: <Employees />,
  },
  {
    key: '@costumers',
    isIndex: false,
    path: 'costumers',
    element: <Costumers />,
  },
  {
    key: '@products',
    isIndex: false,
    path: 'products',
    element: <Products />,
  },
  {
    key: '@cars',
    isIndex: false,
    path: 'cars',
    element: <Cars />,
  },
  {
    key: '@brands',
    isIndex: false,
    path: 'brands',
    element: <Brands />,
  },
]

export function Router() {
  const renderRoutes = useCallback(() => ROUTES.map(({ key, isIndex, path, element }) => <Route index={isIndex} key={key} path={path} element={element} />), [])

  return <Routes>{renderRoutes()}</Routes>
}
