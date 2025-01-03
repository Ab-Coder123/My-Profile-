import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// src/App.jsx
import './Constant/AnimatedSection.jsx';
import './Constant/fontAwesome.jsx';
import { I18nextProvider } from "react-i18next";
import i18n from "./Constant/i18n.js";
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
  </StrictMode>,
)
