"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

function Hero() {
  return (
    
    <section id="hero" className="d-flex align-items-center">
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            {/* <h1 data-aos="fade-up">Grow your business with Akeshya</h1> */}
            <h1
        
      >
        Grow your business with Akeshya
      </h1>
            {/* <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented website designers, developers & digital marketeers</h2> */}
            <h2
        
      >
        We are a team of talented website designers, developers & digital marketeers
      </h2>
            {/* <div data-aos="fade-up" data-aos-delay="800">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div> */}
             <div
        
      >
        <Link href="/about" className="btn-get-started scrollto">Get Started</Link>
      </div>
          </div>
          <div
          
          className="col-lg-6 order-1 order-lg-2 hero-img" 
      
          >
            <Image src="/assets/img/hero-img.png" className="img-fluid animated" alt="" height={1000} width={1000}/>
          </div>
        </div>
      </div>
  
    </section>
  
  )
}

export default Hero