import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/secret",
        element: <PrivateRoutes>
          <Secret></Secret>
        </PrivateRoutes>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes>
      <Dashboard></Dashboard>
    </PrivateRoutes>,
    children: [
      {
      path: 'cart',
      element: <Cart></Cart>
    },
      {
      path: 'userhome',
      element: <Cart></Cart>
    },
  ]
  }
]);