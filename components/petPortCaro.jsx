'use client'; 
import { useEffect, useState } from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

    export default function petPortCaro({ children }) {

        const [setIndex] = useState(0);
        {
           setIndex(selectedIndex);
        };
  return (
    <>
    <div>
    <Carousel pause="hover">
<Carousel.Item>
  
    

</Carousel.Item>
    </Carousel>
    {children}
    </div>
    </>
  )
}
