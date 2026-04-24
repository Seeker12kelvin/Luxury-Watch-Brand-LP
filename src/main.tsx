import './index.css'
import App from './App.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SmoothScroll from './components/SmoothScroll.jsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
)