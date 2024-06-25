import React from 'react'
import {createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import PageNotFound from './components/404'
import './App.css'
import Chat from './components/Chat'
import { NavbarComponent } from './components/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CreateAd from "./components/Dashboard/create-ad";
import {AdminDashboard} from "./components/admin/dashboard";
import {getLocalData} from "./utils/utils";
import {NavbarUnAuthComponent} from "./components/NavbarUnAuth";
import ProductDetails from "./components/Dashboard/ProductDetails";

function App() {
  const isLogin = getLocalData('dbUser')

  const PrivateRoutes = () => {
    const location = useLocation();
    // const isLogin = getLocalData('dbUser')

    if (isLogin === undefined) {
      return null;
    }

    return isLogin
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;
  }

  const ForcedRoutes = () => {
    const location = useLocation();
    // const isLogin = getLocalData('dbUser')
    if (isLogin === undefined) {
      return null;
    }

    return isLogin
        ?<Navigate to="/dashboard" replace state={{ from: location }} />
        : <Outlet/>
  }


  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <ForcedRoutes />,
      children: [
        {
          path: '/login',
          element: <Login />
        }
      ]},
    {
      path: '/',
      element: <PrivateRoutes />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/ad-create',
          element: <CreateAd />,
        },
        {
          path: '/details',
          element: <ProductDetails />,
        },
        {
          path: '/chat',
          element: <Chat />,
        },
        {
          path: '/admin',
          element: <AdminDashboard />,
        },
      ]},
    // {
    //     path: '/forgot-password',
    //     element: <ForgotPasswordView />
    // },
    // {
    //     path: '/admin',
    //     element: <AdminDashboard />
    // },
    // {
    //     path: '/admin/login',
    //     element: <AdminLogin />
    // }
  ])
  return (
    <div className='flex flex-col items-center justify-center overflow-x-hidden'>
      {isLogin ?
      <NavbarComponent currentPath={window.location.pathname} /> : <NavbarUnAuthComponent currentPath={window.location.pathname} />}
      <div className='w-full'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
