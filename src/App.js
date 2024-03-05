import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PageNotFound from "./components/404";
import './App.css'

function App() {
    const router = createBrowserRouter([
        {
            path: '*',
            element: <PageNotFound />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/login',
            element: <Login />
        },
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
        <div className="flex flex-col items-center justify-center overflow-x-hidden">
            <div className="w-full">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
