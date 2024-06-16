
import React from 'react'

import Image from 'next/image'

const imageArray=[
    "/assets/img/clients/client-1.png",
    "/assets/img/clients/client-2.png",
    "/assets/img/clients/client-3.png",
    "/assets/img/clients/client-4.png",
    "/assets/img/clients/client-5.png",
    "/assets/img/clients/client-6.png",
    
]

function Client() {
  return (
    <section id="clients" className="clients clients">
    <div className="container">

      <div className="row">

        {imageArray.map((img)=>(
            <div key={img} className="col-lg-2 col-md-4 col-6">
            <Image src={img} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" height={1000} width={1000}/>
          </div>
        ))}


      </div>

    </div>
  </section>

  )
}

export default Client