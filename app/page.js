"use client";
import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
const HomePage = () => {
  return (
    <div className="home">
      <Row>
        <Row class="text-center" className="main">
          <h1 class="float">Louise Kerin</h1>
          <h6>Art - Web Copy - Design</h6>
        </Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <img
            src="/nana-gen.jpg"
            class="float"
            className="home-img"
            alt="hand drawn image of a grandmother and her granddaughter on her wedding day"
          ></img>
        </Col>
        <Col sm={10} md={7} lg={6} xl={6}>
          <Row m={1}></Row>
          <Row m={10}>
            <img
              src="/lk-green-logo.gif"
              alt="green circle logo with the letters l and k"
              class="my-auto"
            ></img>
          </Row>
          <Row m={1}></Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
