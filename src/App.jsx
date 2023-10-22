import TopNav from "./components/Topnav";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Login from "./views/Login/Login";
// import SignUp from "./views/SignUp/SignUp";
import { unauthenticatedRoutes, authenticatedRoutes } from "./routes";
import "./App.css";
import { useEffect, useState } from "react";
import Profile from "./views/Profile/Profile";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/logIn");
    }
  }, [isAuth]);

  const authenticate = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <div className="App">
      {isAuth ? (
        <>
          <TopNav logoutHandler={logout} />

          {/* <SignUp /> */}
          <Routes>
            {authenticatedRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                  exact
                />
              );
            })}
          </Routes>
        </>
      ) : (
        <Routes>
          {unauthenticatedRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element authenticate={authenticate} />}
                exact
              />
            );
          })}
        </Routes>
      )}
    </div>
  );
};

export default App;
