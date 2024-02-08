import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
// import LoginPage from './pages/Login/LoginPage.jsx'
// import DashBoardPage from './pages/Dashboard/DashBoardPage.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/login" replace />,
//   },
//   {
//     path:'/login',
//     element: LoginPage(),
//   },
//   {
//     path:'/dashboard',
//     element: DashBoardPage()
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)
