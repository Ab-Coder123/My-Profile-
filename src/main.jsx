import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// src/App.jsx
import './Constant/AnimatedSection.jsx';
import './Constant/fontAwesome.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
