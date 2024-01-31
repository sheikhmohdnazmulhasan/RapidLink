import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import AuthProvider from './Providers/AuthProvider'
import { SocketProvider } from './Providers/SocketProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <AuthProvider>
        <RouterProvider router={Router}>
        </RouterProvider>
      </AuthProvider>

    </SocketProvider>
  </React.StrictMode>,
)
