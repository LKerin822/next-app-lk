'use client'; 
import { useEffect, useState } from 'react';
import {Card, Row, Col, Carousel, Container} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignCaro from '@/components/DesignCaro';

import React from 'react'

const designPage = () => {
  return (
    <Container className="cont-bg">
    <DesignCaro />
    </Container>
  )
};

export default designPage;