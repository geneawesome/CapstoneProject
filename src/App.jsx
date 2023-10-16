import TopNav from "./components/Topnav";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import routes from "./routes";
import "./App.css";
import { useState } from "react";

const App = () => {
  console.log(routes);
  const [isAuth, setIsAuth] = useState(false);

  const authenticate = () => {
    setIsAuth(true);
  };

  return (
    <div className="App">
      {isAuth ? (
        <>
          <TopNav />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact
                />
              );
            })}
          </Routes>
        </>
      ) : (
        <Login authenticate={authenticate} />
      )}
    </div>
  );
};

export default App;
