import React from 'react'
import Index from './pages/index'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './components/Home';
import Templates from './components/Templates';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path:'/',
        element : <Home/>
      },
      {
        path : '/templates',
        element : <Templates/>
      },
      {
        path : '/projects',
        element : <Projects/>
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={router}/>)
}
export default App
