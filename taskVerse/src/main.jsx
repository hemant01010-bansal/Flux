import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './pages/About/About.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import AuthLayout from '../AuthLayout.jsx'
import LogIn from './pages/LogIn/LogIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import HistoryLists from './pages/History/HistoryLists.jsx'

const router = createBrowserRouter([
  { //route object
    element: <Layout/>,
    children: [
      {
        path: "/",  //this is imp because when browser by default loads '/' the root URL when the apps start
        //if i comment out this 1st object then browser give me error because in 2nd object i doesn't define 
        //the route for path '/'
        element: <About/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/historyLists",
        element: <HistoryLists/>
      }
    ]
  },
  {
    element: <AuthLayout/>,
    children:[
      {
        path: "/logIn",
        element: <LogIn/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
