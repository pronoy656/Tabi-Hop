import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayOut";
import Overview from "../pages/user/overview/Overview";
import SignInLayout from "../layouts/authentication/SignInLayout";
import SignUp from "../pages/authentication/SignUp/SignUp";
import MyWorkplace from "../pages/user/myWorkplace/MyWorkplace";
import TravelSelector from "../pages/authentication/TravelSelector/TravelSelector";
import FlowSelector from "../pages/authentication/FlowSelector/FlowSelector";
import Accommodations from "../pages/user/accommodations/Accommodations";
import ActivitySelector from "../pages/authentication/ActivitySelector/ActivitySelector";
import DislikeSelector from "../pages/authentication/DislikeSelector/DislikeSelector";
import StressSelector from "../pages/authentication/StressSelector/StressSelector";
import EmailVerefication from "../pages/authentication/Emailverefication/EmailVerefication";
import BirthdaySelection from "../pages/authentication/BIrthdaySelection/BirthdaySelection";

import WorkplaceIterinaryDetails from "../components/Workplace/WorkplaceIterinaryDetails";
import Itinerary from "../pages/user/Itinerary/Itinerary";
import CreateItinerary from "../components/Itinerary/CreateItinerary";

import DateLocationSelect from "../pages/authentication/DateLocationSelect/DateLocationSelect";
import SignIn from "../pages/authentication/SignIn/SignIn";
import ForgetPassword from "../pages/authentication/ForgetPassword/ForgetPassword";
import PasswordCode from "../pages/authentication/PasswordCode/PasswordCode";
import ResetPassword from "../pages/authentication/ResetPassword/ResetPassword";
import SubscriptionPlan from "../pages/authentication/SubscriptionPlan/SubscriptionPlan";
import Allergies from "../pages/authentication/Allergies/Allergies";
import SelectionPreferences from "../pages/authentication/SelectionPreferences/SelectionPreferences";
import TodoList from "../pages/user/todoList/TodoList";
import PackingList from "../pages/user/packingList/PackingList";
import Bookings from "../pages/user/bookings/Bookings";
import BucketList from "../pages/user/bucketList/BucketList";
import AddDestination from "../components/Itinerary/AddDestination";
import MoodBoard from "../pages/user/moodboard/MoodBoard";
import MoodBoardDetails from "../pages/user/moodboard/MoodBoardDetails";
import Payment from "../pages/authentication/SubscriptionPlan/Payment";

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
        path: "/my-workplace/details/:id",
        element: <WorkplaceIterinaryDetails />,
      },
      {
        path: "/accommodations",
        element: <Accommodations />,
      },
      {
        path: "/itinerary",
        element: <Itinerary />,
      },
      {
        path: "/itinerary/create-itinerary",
        element: <CreateItinerary />,
      },
      {
        path: "/itinerary/add-destination",
        element: <AddDestination />,
      },
      {
        path: "/moodboard",
        element: <MoodBoard />,
      },
      {
        path: "/moodboard/details/:id",
        element: <MoodBoardDetails />,
      },
      {
        path: "/todolist",
        element: <TodoList />,
      },

      {
        path: "/packing-list",
        element: <PackingList />,
      },
      {
        path:"/bookings",
        element:<Bookings/>
      },
      {
        path:"/bucket-list",
        element:<BucketList/>
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
      {
        path: "/signin/date-location-selection",
        element: <DateLocationSelect></DateLocationSelect>,
      },
      {
        path: "/signin/log-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signin/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/signin/password-code-verification",
        element: <PasswordCode></PasswordCode>,
      },
      {
        path: "/signin/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/signin/subscription-plan",
        element: <SubscriptionPlan></SubscriptionPlan>,
      },
      {
        path: "/signin/allergies",
        element: <Allergies></Allergies>,
      },
      {
        path: "/signin/selection-preferences",
        element: <SelectionPreferences></SelectionPreferences>,
      },
      {
        path: "/signin/details/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
