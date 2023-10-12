import { Container, Navbar, Nav, NavLink, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Topnav.css";
// import { CiSearch } from "react-icons/ci";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function TopNav() {
  const TopNav = useNavigate();

  const menuData = [
    //   {
    //     path:'/home',
    //     name: "Home"
    // },
    {
      path: "/video",
      name: "Video",
    },

    {
      path: "/about",
      name: "About",
    },

    {
      path: "/services",
      name: "Services",
    },
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand gadgetgrove-logo">
          FriendLink
          <Form className="d-flex">
            <SearchIcon />
            <Form.Control
              type="search"
              placeholder="Search Friendlink"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink as={Link} to={item.path} key={item.name}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          {/* {
            <Nav className="ms-auto">
              <button
                onClick={() => TopNav("/SignUp")}
                className="btn btn-success"
              >
                Sign Up
              </button>
            </Nav>
          } */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
