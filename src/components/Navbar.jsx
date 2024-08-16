import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'
import DashBoard from './DashBoard';

function MyNavbar() {
  return (
   <div >
    <nav>
      <Navbar bg="dark" variant="dark" style={{ top: 0,left: 0,width: '100%',zIndex: 1,height: '80px'}}>
        <Container>
          <Nav className="me-auto"><Link to="/">
          <img src={logo} alt="Logo" style={{ height: '70px',  }}/>
          </Link></Nav>
            <br/>
            <Nav className="ms-auto">
            <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
            <Link to="/services"><Navbar.Brand>Services</Navbar.Brand></Link>
            <Link to="/events"><Navbar.Brand>Events</Navbar.Brand></Link>
            <Link to="/about"><Navbar.Brand>Testimony</Navbar.Brand></Link>
          <DashBoard/>
          </Nav>
        </Container>
      </Navbar>
    </nav>
   </div>
  );
}

export default MyNavbar;