import { createBrowserRouter } from 'react-router'
import RootLayout from '@/components/layout/RootLayout'
import HomePage from '@/pages/HomePage'

const page = (load) => async () => ({ Component: (await load()).default })

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', lazy: page(() => import('@/pages/LoginPage')) },
      { path: '/signup', lazy: page(() => import('@/pages/SignupPage')) },
    ],
  },
])
