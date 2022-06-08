import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://tse2.mm.bing.net/th?id=OIP.XDm6_fW6FO_xULvbAoVAQwHaE8&pid=Api&P=0&w=240&h=160" width={50} height={50} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Courses</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/form">EnquiryForm</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/enquirydetails">Enquiry details</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
