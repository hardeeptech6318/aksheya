"use client"
import { navlink } from '@/constant/Navlink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



function Header() {
    const router=usePathname()
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1>
        <a href='index.html'>
            <img src="assets/img/logo.png" alt="" className="img-fluid"/>
        AKESHYA
        </a>
        </h1>
        
      </div>

      <nav id="navbar" className="navbar">
        <ul>
            {navlink.map((l)=>(
          <li key={l.title}><Link className={`nav-link scrollto ${router===l.url ? "text-primary" :""}`} href={l.url}>{l.title}</Link></li>      
            ))}
          {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className='nav-link scrollto' href='about.html'>About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className='getstarted scrollto' href='contact.html'>Contact us</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        
      </nav>

    </div>
  </header>

  )
}

export default Header