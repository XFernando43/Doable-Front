import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ListPage from './pages/ListsPages/ListsPages.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import DashBoardPage from './pages/Dashboard/DashBoardPage.jsx'
import './index.css'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path:'/login',
    element: LoginPage(),
  },
  {
    path:'/dashboard',
    element: DashBoardPage()
    // children: [
    //   { path: 'lists', element: <h1>HOPOLA</h1> }
    // ]
  },
  {
    path:'/lists/:id',
    element: ListPage()
    // children: [
    //   { path: 'lists', element: <h1>HOPOLA</h1> }
    // ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
