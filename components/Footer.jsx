"use client";
import { useState } from "react";
import { Col, Row, Nav } from "react-bootstrap";
import React from 'react';
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="footer t-3">
        <Row>
            <Col>
            <Link href="/about">About</Link>
            </Col>
            <Col>
            <Link href="/gallery">Galleries</Link>
            </Col>
            <Col>
              <Link href="/appointments">Availability</Link>
            </Col>
            <Col>
            <Link href="/contact">Contact</Link>
            </Col>
          </Row>
          <Col className="mx-auto t-3"> 
            <a className="footer-links m-2" href="https://www.tiktok.com/@louisekerinstudios"><FaTiktok /></a>
            <a className="footer-links m-2" href="https://www.instagram.com/louisekerinstudios/"><FaInstagram /></a>
            <a className="footer-links m-2" href="https://www.facebook.com"><FaFacebook /></a>
            </Col>
          <Row className="p-4"><p>Louise Kerin &copy; 2023</p></Row>
    
    </div>
  )
}

export default Footer


          