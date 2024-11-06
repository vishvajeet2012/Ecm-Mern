import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmpoyeeDashboard from './components/Dashbord/EmpoyeeDashboard'
import AdminDashbord from './components/Dashbord/AdminDashbord'

function App() {


  return (
     <>
    {/* //  <Login/> */}
      
{/* <EmpoyeeDashboard/> */}
<AdminDashbord/>
    </>
  )
}

export default App
