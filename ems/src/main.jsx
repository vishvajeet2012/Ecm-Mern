import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContex from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthContex>
<TaskContext>
  <App />
  </TaskContext> 
  </AuthContex>
   
  </StrictMode>,
)
