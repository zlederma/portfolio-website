import "../styles/NavigationStyles.css"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Links from "./Links";
import Brand from "./Brand";


export default function Navigation() {
    return (
        <div>
            <Navbar id="navbar" style={{ background: "rgba(41, 34, 32, 1)" }} collapseOnSelect expand="sm"
                variant="dark"
                fixed="top">
                <Container>
                    <Brand />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/projects/portfolioception">Portfolioception</NavDropdown.Item>
                                <NavDropdown.Item href="/projects/book-app">Book App</NavDropdown.Item>
                                <NavDropdown.Item href="/projects/triton-jam">Triton Jam</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Links />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
