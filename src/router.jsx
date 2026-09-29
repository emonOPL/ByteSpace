import { createBrowserRouter, data } from 'react-router'
import MainLayout from '@/components/layout/MainLayout'
import RootLayout from '@/components/layout/RootLayout'
import HomePage from '@/pages/HomePage'

const page = (load) => async () => ({ Component: (await load()).default })

const courseDetails = async () => {
  const [{ default: Component }, { getCourseDetails }] = await Promise.all([
    import('@/pages/CourseDetailsPage'),
    import('@/data/courseDetails'),
  ])
  return {
    Component,
    loader: ({ params }) => {
      const details = getCourseDetails(params.slug)
      if (!details) throw data(null, { status: 404 })
      return details
    },
  }
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/courses', lazy: page(() => import('@/pages/CoursesPage')) },
          { path: '/courses/:slug', lazy: courseDetails },
        ],
      },
      { path: '/login', lazy: page(() => import('@/pages/LoginPage')) },
      { path: '/signup', lazy: page(() => import('@/pages/SignupPage')) },
    ],
  },
])
