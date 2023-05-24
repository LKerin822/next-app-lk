"use client"
import { useState } from 'react';
import Link from "next/link"
import { Badge, Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header> 
      <Navbar expand="lg" collapseOnSelect className="header">
      <Link href="/"><img src="/logo.png"  className="logo-img" alt="logo" /></Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Galleries</Link>
        <Link href="/appointments">Availability</Link>
        <Link href="/contact">Contact</Link>
 
      </Navbar>     
    </header>
  )
}

export default Header 