import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DataSubmitted from './routes/DataSubmitted.jsx'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "*",
    element: <div>Nothin to shpw</div>
  },
  {
    path: "dashboard",
    element: <DataSubmitted/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routes}/>    
  </React.StrictMode>,
)
