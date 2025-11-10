import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SignInLayout = () => {
  // const location = useLocation();

  // const hideLayOut = location.pathname === "/signin/selection-preferences";
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default SignInLayout;
