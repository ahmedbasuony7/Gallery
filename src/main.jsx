import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Link} from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
