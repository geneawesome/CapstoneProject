import Home from "./views/Home/Home";
import About from "./views/About/About";
import Video from "./views/Video/Video";
import SignUp from "./views/SignUp/SignUp";
import Services from "./views/Services/Services";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/video", element: <Video /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/services", element: <Services /> },
];

export default routes;
