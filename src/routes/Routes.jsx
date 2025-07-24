import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayOut";
import Overview from "../pages/user/overview/Overview";
import SignInLayout from "../layouts/authentication/SignInLayout";
import SignUp from "../pages/authentication/SignUp/SignUp";
import MyWorkplace from "../pages/user/myWorkplace/MyWorkplace";
import TravelSelector from "../pages/authentication/TravelSelector/TravelSelector";
import FlowSelector from "../pages/authentication/FlowSelector/FlowSelector";
<<<<<<< HEAD
import Accommodations from "../pages/user/accommodations/Accommodations";
=======
import ActivitySelector from "../pages/authentication/ActivitySelector/ActivitySelector";
import DislikeSelector from "../pages/authentication/DislikeSelector/DislikeSelector";
import StressSelector from "../pages/authentication/StressSelector/StressSelector";
import EmailVerefication from "../pages/authentication/Emailverefication/EmailVerefication";
import BirthdaySelection from "../pages/authentication/BIrthdaySelection/BirthdaySelection";
>>>>>>> 44ad727495da62ebf1b9b184a722615ab2963073

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
      {
        path: "/signin/activity-selector",
        element: <ActivitySelector></ActivitySelector>,
      },
      {
        path: "/signin/dislike-selector",
        element: <DislikeSelector></DislikeSelector>,
      },
      {
        path: "/signin/stress-selector",
        element: <StressSelector></StressSelector>,
      },
      {
        path: "/signin/email-verification",
        element: <EmailVerefication></EmailVerefication>,
      },
      {
        path: "/signin/birthday-selection",
        element: <BirthdaySelection></BirthdaySelection>,
      },
    ],
  },
]);

export default router;
