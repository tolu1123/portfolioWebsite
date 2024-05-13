import React from 'react'
import ReactDOM from 'react-dom/client'

// import the router's api
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Import our router pages
import {Index} from './routes/index'
import {Error} from './routes/error'


// Configure the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>,
    errorElement: <Error/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
