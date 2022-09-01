//This is the navbar
//Styling for colors is in App.css

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import React from 'react'
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import resume from '../assets/Resume-Zoe-Lederman.pdf';
import NameIcon from '../assets/NameIcon';


export default function Navigation() {
    return (
        <div>
            <Navbar style={{ background: "rgb(50,50,50)" }} collapseOnSelect expand="md"
                // bg="dark"
                variant="dark"
                fixed="top">
                <Container>
                    <Navbar.Brand href="/"> <div className="name-icon-div"
                        style={{ paddingTop: "2px", display: "inline-block", height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "white" }}>
                        <NameIcon /> </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#About">About Me</Nav.Link>
                            {/* <Nav.Link href="/"> Projects </Nav.Link> */}
                            {/* When I get more projects replace this with a link to all the projects. And then on the homepage have a featured project section. */}
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="my-dropdown-item" href="/projects/triton-jam">Triton Jam</NavDropdown.Item>
                                <NavDropdown.Item className="my-dropdown-item" href="/projects/temperature-blanket">Temperature Blanket</NavDropdown.Item>
                                <NavDropdown.Item className="my-dropdown-item" href="/projects/instacart-redesign">Instacart Redesign</NavDropdown.Item>
                                <NavDropdown.Item className="my-dropdown-item" href="/projects/portfolioception">Portfolioception</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="mx-3 flex-row" justify="true" >
                            <Nav.Link href="https://www.linkedin.com/in/zoe-lederman" target="_blank"> <FaLinkedin className="icon" style={{ fontSize: "30px" }} /></Nav.Link>
                            <Nav.Link href="https://www.github.com/zlederma" target="_blank"><FaGithub className="icon" style={{ fontSize: "30px" }} /></Nav.Link>
                            <Nav.Link href={resume} target="_blank"><IoDocumentTextSharp className="icon" style={{ fontSize: "30px" }} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
