
'use client'; 
import { useEffect, useState } from 'react';
import {Card, Row, Col, Carousel, Container} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import PortraitCaro from '@/components/PortraitCaro';

const portraitPage = () => {
  return (
    <Container className="cont-bg">
    <PortraitCaro/>
    </Container>
    )
}

export default portraitPage