import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Footer.css'

function Footer() {
  return (
    <footer className='footer1'  >
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='footer2' style={{color:'white'}}   >© 2021 Muon.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link  className='footer2'  >Help Cente</Nav.Link>
            <Nav.Link  className='footer2'  >Terms of Use</Nav.Link>

            <Nav.Link  className='footer2'  >Privacy policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </footer>
  )
}

export default Footer
