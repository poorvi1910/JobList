import {Outlet} from 'react-router-dom'
import Navbar from '../components/Nav'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout