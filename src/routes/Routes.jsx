import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayOut";
import Overview from "../pages/user/overview/Overview";
import SignInLayout from "../layouts/authentication/SignInLayout";
import SignUp from "../pages/authentication/SignUp/SignUp";
import MyWorkplace from "../pages/user/myWorkplace/MyWorkplace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
      errorElement: <div>Error page</div>,
        children: [
      {
        path: "",
        element: <Overview></Overview>,
      },
      {
        path: "/my-workplace",
        element:<MyWorkplace/>,
      },
    ],
  },
  {
     path: "/signin",
    element: <SignInLayout/>,
      errorElement: <div>Error page</div>,
        children: [
      {
        index: true,
        element: <SignUp></SignUp>,
      },
    ],
  }
]);

export default router