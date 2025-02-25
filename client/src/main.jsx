import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './routes/Home.jsx'
import Checkout from './routes/Checkout.jsx';
import DataProvider from './contexts/DataProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <DataProvider>
            <Home />
          </DataProvider>
        } />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
