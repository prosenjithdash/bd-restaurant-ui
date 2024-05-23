import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes'

// tan stack query step - 01
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

// tan stack query step - 02(useCart.jsx)

// tan stack query step - 03 (useCart.jsx)
const queryClient = new QueryClient()


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
    {/*  tan stack query step - 04  */}
    {/*  tan stack query step - 05 (useCart.jsx) */}

    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={Routes} />
        </AuthProvider>
        <ToastContainer />
      </HelmetProvider>
    </QueryClientProvider>

    
  </React.StrictMode>,
)
