import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseMemo from './UseMemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseMemo />
  </StrictMode>,
)
