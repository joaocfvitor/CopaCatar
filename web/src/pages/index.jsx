import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  import {Home} from './Home'
  import {Login} from './Login'
  import {SingUp} from './SingUp'
  import { Dashboard } from "./Dashboard"
  import { Profile } from "./Profile"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/singup",
      element: <SingUp/>,
    },

    {
      path: "/dashboard",
      element: <Dashboard/>,
    },

    {
      path: "/profile",
      element: <Profile/>,
    },
  ])

  export const Router = () => (
    <RouterProvider router={router} />
  )