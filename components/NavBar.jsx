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




  const pages = ["foro","Iphone"];

  return (
    <div     className="fixed-top" >
      <Navbar className="z-2 " data-bs-theme="dark" bg="body"  >
            <Container>
              <Navbar.Brand href="/" onMouseEnter={() => setActiveDiv(false)} >Home</Navbar.Brand>
              <Nav className="me-auto">
              
                {pages.map((link, index) => (
                  
                  <Nav.Link key={index} href={`/${link.toLowerCase()}`} onMouseEnter={() =>setActiveDiv(link) } >{link}</Nav.Link>
                ))}

              </Nav>
              
            </Container>
           
      </Navbar>
      <Container>
            <Opciones activeDiv={activeDiv} setActiveDiv={setActiveDiv}/>
      </Container>
      </div>
  )
}
