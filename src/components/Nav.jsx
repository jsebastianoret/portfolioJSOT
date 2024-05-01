import React from 'react'
import '../css/Nav.css'

export default function Nav() {
  return (
    <>
    {/* Usaremos el Sticky de Bootstrap */}
    {/* El sticky-top general, ya que se hara en cualquier resolucion, nada que sm-xl... */}
    {/* <nav className=' sticky-top'>
        <ul  className="ul nav justify-content-center mb-5 pb-3 buttom-6">
          <li  className="nav-item pt-3 pl-3">
            <a  className="a-nav nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item pt-3">
            <a className="a-nav nav-link" href="#">Portfolio</a>
          </li>
          <li className=" nav-item pt-3">
            <a className="a-nav nav-link" href="#">Skills</a>
          </li>
          <li className=" nav-item pt-3">
            <a className="a-nav nav-link" href="#" >Contact</a>
          </li>
        </ul>
    </nav> */}
    
  <nav className=" apl navbar navbar-expand-lg navbar-dark bg-dark mb-4 pb-3 pt-3 sticky-top ">
    <div className="container-fluid " >

      {/* PONER O NO UN TITULO, O UN ICONO MEJOR ???? MMMMMM ???????????????????????? */}
    {/* <a className="navbar-brand" href="#">
      My Portfolio
    </a> */}

      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
       >
        <span className="navbar-toggler-icon " />
      </button>



    
    <div className="asd collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
      <ul className="ul navbar-nav me-autoo mb-2 mb-lg-0 ">
        <li className="nav-item  ">
          <a className="nav-link navs-a" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item navs-a">
          <a className="nav-link" href="#section2">
            Portfolio
          </a>
        </li>
        <li className="nav-item navs-a">
          <a className="nav-link" href="#section3">
            Skills
          </a>
        </li>

{/* 
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}


        <li className="nav-item">
          <a className="nav-link navs-a" href="#section4">
            Contact
          </a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>
    
    </>
  )
}
