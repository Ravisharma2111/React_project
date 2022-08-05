import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import './Section.css'
import { FcDataBackup } from "react-icons/fc";
import Card from "react-bootstrap/Card";


function Section() {
  return (
    <div className='history1'>
      <div className='history2' >
      <Form className="d-flex">
     <Form.Control type="search" className="me-2 history3" />
     <button className='history4'>Search</button>
   </Form>
   </div>
   <div className='history5' >
  </div>
  <div className='history7' >
  <Container  className='history8' >

  <Table  className='history9'>
  <thead>
    <tr className='history10' >
      <th> Sol Pulse	 </th>
      <th> Name </th>
      <th> Category	 </th>
      <th> Market Cap</th>
      <th>Performance 24H	  </th>
    <th> Twitter Followers </th>
    <th></th>
    </tr>
    <td></td>
    <td></td>
    <td></td>
    <td> 
    <FcDataBackup className='history11' size={90} />
    <Card.Title  className='history10' > No Data </Card.Title>
   </td>
   <td></td>
   <td></td>
   <td></td>
  </thead>
    </Table>
    </Container>
    </div>
      </div>
  )
}

export default Section