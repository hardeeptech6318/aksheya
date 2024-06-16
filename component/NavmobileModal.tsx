import { navlink } from "@/constant/Navlink"
import Link from "next/link"



function NavmobileModal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content p-3">
        <div className="d-flex flex-column" style={{"gap":"10px"}}>
        {navlink.map((l)=>(
            <Link style={{textDecoration:"none"}} key={l.title} href={l.url}>{l.title}</Link>
        ))}
        </div>
    {/* <ul className="list-group">
          <li className="list-group-item"><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li className="list-group-item"><a className='nav-link scrollto' href='about.html'>About</a></li>
          <li className="list-group-item"><a className="nav-link scrollto" href="#services">Services</a></li>
          <li className="list-group-item"><a className='getstarted scrollto' href='contact.html'>Contact us</a></li>
        </ul> */}
      {/* <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
  )
}

export default NavmobileModal