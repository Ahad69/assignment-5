import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default routes;
