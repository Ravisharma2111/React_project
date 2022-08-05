// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';



function navbar() {
 
  return (
    <div className="header">


      <Navbar  className="navbar1">
        <Container className="headersection1" >
          <Navbar.Brand  className="heading1" ><strong> Solpulse </strong> </Navbar.Brand>
          <BsThreeDotsVertical className="heading2"/>
        </Container>
       


      </Navbar>
    </div>
  );
}

export default navbar;
