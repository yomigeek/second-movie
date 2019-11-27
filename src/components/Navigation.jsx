import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return(
    <header className="site-header">
    <div className="container">
      <Link to="/" id="branding">
        <img src="https://www.wowza.com/uploads/images/WowzaProfessionalServices.png" alt="" className="logo" />
        <div className="logo-copy">
          <h1 className="site-title">Stream</h1>
          <small className="site-description">Binge w/ Fun!</small>
        </div>
      </Link>

      <div className="main-navigation">
        <form action="#" className="">
          <input type="text" placeholder="Search..." />
          <button><i className="fa fa-search"></i></button>
        </form>
      </div>

      <div className="mobile-navigation"></div>
    </div>
  </header>
  )
}
export default Navigation;
