import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Home } from './components/Home'
import './index.css'

const isTripNotice = window.location.pathname.replace(/\/$/, '').endsWith('/20260829')

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isTripNotice ? <App /> : <Home />}</StrictMode>,
)
