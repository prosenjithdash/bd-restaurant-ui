import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes'

{/* Step - 01 : Helmet provider */ }
// install:=> npm i react-helmet-async

{/* Step - 02 : Helmet provider */ }
// helmet for dynamic title change
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Step - 03 : Helmet provider */}
    {/* Step - 04 -> Menu.jsx : Helmet provider */}
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={Routes} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
