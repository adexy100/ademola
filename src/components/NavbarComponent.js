import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdemolaLogo from "../assets/ademola-logo.png";
import MediaQuery from "react-responsive";
import Resume from "../assets/AdemolaCV.pdf";


const NavbarComponent = () => {

  return (
   
    <Navbar fixed="top" bg="dark" variant="dark">
      <MediaQuery minDeviceWidth={1024}>
         <Navbar.Brand>
           <Link to="/">
             <img src={AdemolaLogo} className="App-logo" alt="logo" width="50" />
           </Link>
         </Navbar.Brand>
        <Nav className="largeNav pv3" variant="pills">
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" to="/About">
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" to="Experience">
              Experience
            </Link>
          </Nav.Item>
          
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" onClick={() => { window.open(Resume, '_blank') }}>
              Resume
            </Link>
          </Nav.Item> 
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" to="/Projects">
              Projects
            </Link>
          </Nav.Item> 
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink" to="/Contact">
              Contact
            </Link>
          </Nav.Item>  
        </Nav>
      </MediaQuery>

     <MediaQuery maxDeviceWidth={1024}>
         <Navbar.Brand>
           <Link to="/">
             <img src={AdemolaLogo} className="App-logo" alt="logo" width="50" />
           </Link>
          </Navbar.Brand>
        <Nav className="mobileNav pv3" variant="pills">
          <Nav.Item className="m-auto grow">
            <Link className="textLink" to="/About">
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow">
            <Link className="textLink" to="/Experience">
              Experience
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow">
            <Link className="textLink" onClick={() => { window.open(Resume, '_blank') }}>
              Resume
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow-large">
            <Link className="textLink w-50" to="/Projects">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto grow">
            <Link className="textLink" to="/Contact">
              Contact
            </Link>
          </Nav.Item> 
        </Nav>
      </MediaQuery>
    </Navbar>   
  );    
};

export default NavbarComponent;
