import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Categories from './Categories.tsx'
import Areas from './Areas.tsx'
import { API_URL } from './assets/API_KEY.ts'

//This loader function is used by the routing to return a get fetch and places
// data into useLoaderData
export const loader = async() => {
  const response = await fetch(API_URL)
  return await response.json()
}

// A layout component is setup for navigation, while the App, Categories, and Areas
// components are setup as children. The Categories and Areas components have dataloaders.
const router = createBrowserRouter([
  {
   
      path: "/",
      element: <Layout/>
    ,
    
  
  children: [
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/Categories",
      element: <Categories  />,
      loader: loader
    },
    {
      path: "/Areas",
      element: <Areas/>,
      loader: loader
    }
  ]
}
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
