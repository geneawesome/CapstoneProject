import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import SignUp from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import Chats from "./views/Chats/Chat";
import Videos from "./views/Videos/Videos";
import Groups from "./views/Groups/Groups";
import Jobs from "./views/Jobs/Jobs";
import Courses from "./views/Courses/Courses";
const authenticatedRoutes = [
  { path: "/", element: Home },
  { path: "/profile", element: Profile },
  { path: "/chats", element: Chats },
  { path: "/videos", element: Videos },
  { path: "/groups", element: Groups },
  { path: "/jobs", element: Jobs },
  { path: "/courses", element: Courses },
];
const unauthenticatedRoutes = [
  { path: "/logIn", element: Login },
  { path: "/signUp", element: SignUp },
];
export { authenticatedRoutes, unauthenticatedRoutes };
