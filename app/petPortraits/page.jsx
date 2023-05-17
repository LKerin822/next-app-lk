
'use client'; 
import { useEffect, useState } from 'react';
import {Card, Row, Col, Carousel} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Slideshow from '@/components/Slideshow';


const petPortraitPage = () => {
  return (
    <Slideshow />

  )
}

export default petPortraitPage