import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'react-bootstrap'
import "./index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider dir='rtl'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
