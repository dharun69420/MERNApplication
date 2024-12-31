import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import Contactus from './Contactus'
import Aboutus from './Aboutus'
import Home from './Home'
import { BrowserRouter ,Router, Route,Link } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
