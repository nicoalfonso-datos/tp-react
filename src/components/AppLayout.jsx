import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
