import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({
  searchInputHandler, submitHandler, keyword
}) => {
  return (
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
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search..."
              onChange={searchInputHandler}
              value={keyword}
              required
            />
            <button onClick={submitHandler}><i className="fa fa-search"></i></button>
          </form>
        </div>

        <div className="mobile-navigation"></div>
      </div>
    </header>
  )
}
export default Navigation;
