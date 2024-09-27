import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpeg"
import { ArrowDownIcon, ArrowRightIcon } from "@primer/octicons-react";


const Navbar: React.FC = () => {
  const contactNumber = "0";

  return (
    <BootstrapNavbar expand="lg" className="navbar-custom py-3">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img
            src={logo}
            alt="Businezz X Logo"
            className="navbar-logo"
            style={{ height: "40px", width: "auto" }}
          />
        </BootstrapNavbar.Brand>
        <div
          style={{
            borderLeft: "1px solid #ccc",
            height: "27px",
            margin: "0 1px",
          }}
        />
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pages">
              Pages
              <ArrowDownIcon size={20} className="icon-style" />
            </Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#contact">Contact [{contactNumber}]</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#consultation"
              className="btn btn-outline-primary d-flex align-items-center"
              style={{
                padding: "8px 16px",
                borderRadius: "50px", // Bordes redondeados
                fontWeight: "500",
                border: " solid 2px",
                backgroundColor: "transparent",
              }}
            >
              Free Consultation
              <ArrowRightIcon size={23} className="arrow-style" />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
