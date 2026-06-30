import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import './index.css';
import App from './App' // Humne '.jsx' hata diya hai taake yeh .tsx file ko uthaye

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)