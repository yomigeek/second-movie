import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({
  searchInputHandler, submitHandler, keyword
}) => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" id="branding">
          <img
            src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574993312/logo_nk0zam.png"
            alt=""
            className="logo"
          />

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
