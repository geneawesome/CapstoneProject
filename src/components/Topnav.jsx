import { Container, Navbar, Nav, NavLink, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Topnav.css";
import { useNavigate } from "react-router-dom";

function TopNav() {
  const TopNav = useNavigate();

  const menuData = [
    //   {
    //     path:'/home',
    //     name: "Home"
    // },
    // {
    //   path: "/notifications",
    //   name: "Notifications",
    // },
    // {
    //   path: "/profile",
    //   name: "Profile",
    // },
    // {
    //   path: "/services",
    //   name: "Services",
    // },
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="brand gadgetgrove-logo" as={Link} to="/">
        <span>FriendLink</span>
      </Navbar.Brand>
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Friendlink"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink as={Link} to={item.path} key={item.name}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          {
            <Nav className="ms-auto gap-3 ">
              <button
                onClick={() => TopNav("/Profile")}
                className="btn btn-success"
              >
                Profile
              </button>

              <button
                onClick={() => TopNav("/Logout")}
                className="btn btn-success"
              >
                Logout
              </button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
