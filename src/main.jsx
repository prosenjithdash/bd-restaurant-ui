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
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Step - 03 : Helmet provider */}
    {/* Step - 04 -> Menu.jsx : Helmet provider */}
    <HelmetProvider>
    
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
      <ToastContainer />

 
    </HelmetProvider>
  </React.StrictMode>,
)
