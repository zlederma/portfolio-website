//This is the navbar
//Styling for colors is in App.css

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import React from 'react'

// style={{ backgroundColor: "#f2d3ce" }}

export default function Navigation() {
    return (
        <div style={{ border: "2px solid pink" }}>
            <Navbar collapseOnSelect expand="md"
                bg="dark"
                variant="dark"
                fixed="top">
                <Container>
                    <Navbar.Brand href="#home">ZL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="test" href="/">Home</Nav.Link>
                            <NavDropdown className="myDropdown" title="Case-Studies" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="my-dropdown-item" href="/projects/temperature-blanket">Temperature Blanket</NavDropdown.Item>
                                <NavDropdown.Item className="my-dropdown-item" href="#action/3.2">Instacart Redesign</NavDropdown.Item>
                                <NavDropdown.Item className="my-dropdown-item" href="#action/3.3">Tri-Dev</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/#About">About Me</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Linked In</Nav.Link>
                            <Nav.Link href="#deets">Github</Nav.Link>
                            <Nav.Link href="#deets">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
