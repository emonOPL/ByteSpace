import { createBrowserRouter, data } from 'react-router'
import MainLayout from '@/components/layout/MainLayout'
import RootLayout from '@/components/layout/RootLayout'
import RouteError from '@/components/layout/RouteError'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

const page = (load) => async () => ({ Component: (await load()).default })

const pageWithData = (loadPage, loadData, pick) => async () => {
  const [{ default: Component }, module] = await Promise.all([
    loadPage(),
    loadData(),
  ])
  return {
    Component,
    loader: ({ params }) => {
      const result = pick(module, params.slug)
      if (!result) throw data(null, { status: 404 })
      return result
    },
  }
}

const courseDetails = pageWithData(
  () => import('@/pages/CourseDetailsPage'),
  () => import('@/data/courseDetails'),
  (module, slug) => module.getCourseDetails(slug),
)

const creatorProfile = pageWithData(
  () => import('@/pages/CreatorProfilePage'),
  () => import('@/data/creators'),
  (module, slug) => module.getCreator(slug),
)

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            errorElement: <RouteError />,
            children: [
              { path: '/', element: <HomePage /> },
              {
                path: '/courses',
                lazy: page(() => import('@/pages/CoursesPage')),
              },
              { path: '/courses/:slug', lazy: courseDetails },
              { path: '/creators/:slug', lazy: creatorProfile },
              { path: '*', element: <NotFoundPage /> },
            ],
          },
        ],
      },
      { path: '/login', lazy: page(() => import('@/pages/LoginPage')) },
      { path: '/signup', lazy: page(() => import('@/pages/SignupPage')) },
    ],
  },
])
