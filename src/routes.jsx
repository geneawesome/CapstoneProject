import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Notifications from "./views/Notifications/Notifications";
import SignUp from "./views/SignUp/SignUp";
import Services from "./views/Services/Services";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/Notifications", element: <Notifications /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/services", element: <Services /> },
];

export default routes;
