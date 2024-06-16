"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from "@/component/Hero";
import Client from "@/component/Client";
import About from "@/component/About";
import Service from "@/component/Service";
import Feature from "@/component/Feature";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Count from "@/component/Count";
import { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    AOS.init(
      {duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false}
    );
  }, [])
  return (
    <>
    
    <Hero/>
    <Client/>
    <About/>
    <Count/>
    <Service/>
    <Feature/>
    <Contact/>
    <Footer/>
    </>
  );
}
