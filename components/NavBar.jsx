"use client"
import React, { useState,useEffect } from "react";
import Opciones from '@/components/Opciones';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {

  const [activeDiv, setActiveDiv] = useState("");
  
  useEffect(() => {
    console.log(activeDiv);
  }, [activeDiv]);




  const pages = ["Home","Link"];

  return (
    <div bg="primary" data-bs-theme="dark"  >
      <Navbar className="z-2" bg="primary" data-bs-theme="dark" >
            <Container>
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav className="me-auto">
              
                {pages.map((link, index) => (
                  <Nav.Link key={index} href={`/${link}`} onMouseEnter={() =>setActiveDiv(link) } >{link}</Nav.Link>
                ))}

              </Nav>
              
            </Container>
           
      </Navbar>
      <Container>
            <Opciones activeDiv={activeDiv}/>
      </Container>
      </div>
  )
}
