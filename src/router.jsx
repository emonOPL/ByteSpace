import { createBrowserRouter } from 'react-router'
import MainLayout from '@/components/layout/MainLayout'
import RootLayout from '@/components/layout/RootLayout'
import HomePage from '@/pages/HomePage'

const page = (load) => async () => ({ Component: (await load()).default })

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/courses', lazy: page(() => import('@/pages/CoursesPage')) },
        ],
      },
      { path: '/login', lazy: page(() => import('@/pages/LoginPage')) },
      { path: '/signup', lazy: page(() => import('@/pages/SignupPage')) },
    ],
  },
])
