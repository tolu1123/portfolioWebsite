import React, {useState, createContext} from 'react'
import ReactDOM from 'react-dom/client'


// import the router's api
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


// Import our router pages
import {Index} from './routes/index'
import {Error} from './routes/Error.jsx'
import Blog from './routes/Blog.jsx'





// Configure the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error/>,
  },{
    path: '/blog',
    element: <Blog />
  }
])

// Create a context for the link value
export const LinkContext = createContext({
  linkValue: '',
  updateLinkValue: () => {}
})

// Creating a default component
function Default() {

  // Creating a global state for the link value that will be used by the header components of all apps specifically those aside from the index page
  const [linkValue, setLinkValue] = useState(' ');

  function updateLinkValue(data) {
    setLinkValue(data);
  }
  

  return (
    <React.StrictMode>
      <LinkContext.Provider value={{linkValue, updateLinkValue}} >
        <RouterProvider router={router}></RouterProvider>
      </LinkContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Default />
)
