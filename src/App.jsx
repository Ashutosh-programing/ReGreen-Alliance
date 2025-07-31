import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import OurPartners from './Pages/OurPartners';
import OutWork from './Pages/OutWork';
import ContactUs from './Pages/ContactUs';
import ComingSoon from './Pages/Cooming';

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:'OurPartners',
        element:<OurPartners/>
      },
      {
        path:'OurWork',
        element:<OutWork/>
      },
      {
        path:'ContactUs',
        element:<ContactUs/>
      },
      {
            path:'comingSoon',
            element:<ComingSoon/>
      }
    ]
  }])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
