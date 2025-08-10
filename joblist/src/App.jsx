import HomePage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {
  const addJob=async(newJob)=>{
    const res=await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    })
    return
  }

  const deleteJob=async(id)=>{
    console.log('delete', id)
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>}loader={jobLoader}/>
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App