'use client'; 
import { useEffect, useState } from 'react';
import {Card, Row, Col, Carousel} from 'react-bootstrap';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import DesignCaro from '@/components/DesignCaro';
import React from 'react'

const designPage = () => {
  return (
    <DesignCaro />
  )
}

export default designPage