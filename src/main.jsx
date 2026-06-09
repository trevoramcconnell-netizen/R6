import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './r6-companion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
