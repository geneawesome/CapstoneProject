import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import SignUp from "./views/SignUp/SignUp";
import Products from "./views/Products/Products";



const routes = [

    { path: "/", element: <Home />,},
    { path: "/about", element: <About />,},
    { path: "/contact", element: <Contact />,},
    { path: "/signUp", element: <SignUp />,},
    { path: "/products", element: <Products/>,},  
];

export default routes;