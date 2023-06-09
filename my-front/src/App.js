import './App.css';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import React, { Profiler } from "react";
// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";


import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Services from './pages/services/Services';
import Myserv from './pages/myserv/Myserv';
import Service from './pages/service/Service';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import Index from './Admin/Index';
import Navbar from './components/navbar/Navbar';
// import NavDash from './Admin/Components/NavDash';
import Profile from './pages/profile/Profile';
import Demande from './pages/demande/Demande';

function App() {

  const queryClient = new QueryClient()
  // let HideHeader = window.location.pathname.includes('/admin/') ? <NavDash/> : <Navbar/>
 

  const Layout = () => {
    return (
      <div className="app">
         <QueryClientProvider client={queryClient}>
    {/* <Index/> */}
        <Navbar />
        
        <Outlet />
        <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Services />,
        },
       
        
        {
          path: "/myGigs",
          element: <Myserv/>,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        // {
        //   path: "/admin",
        //   element: <Index />,
        // },
        {
          path: "/profil",
          element: <Profile />,
        },
        {
          path: "/gig/:id",
          element: <Service />,
        },
        {
          path: "/demande/:id",
          element: <Demande />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
