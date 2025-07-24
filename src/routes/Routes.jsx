import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayOut";
import Overview from "../pages/user/overview/Overview";
import SignInLayout from "../layouts/authentication/SignInLayout";
import SignUp from "../pages/authentication/SignUp/SignUp";
import MyWorkplace from "../pages/user/myWorkplace/MyWorkplace";
import TravelSelector from "../pages/authentication/TravelSelector/TravelSelector";
import FlowSelector from "../pages/authentication/FlowSelector/FlowSelector";
import Accommodations from "../pages/user/accommodations/Accommodations";

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
        element: <MyWorkplace />,
      },
      {
        path:"/accommodations",
        element:<Accommodations/>
      }
    ],
  },
  {
    path: "/signin",
    element: <SignInLayout />,
    errorElement: <div>Error page</div>,
    children: [
      {
        index: true,
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin/travel-selector",
        element: <TravelSelector></TravelSelector>,
      },
      {
        path: "/signin/flow-selector",
        element: <FlowSelector></FlowSelector>,
      },
    ],
  },
]);

export default router;
