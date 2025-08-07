import HomePage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import JobsPage from './pages/JobsPage'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App