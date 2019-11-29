import React from 'react'
import { Link } from 'react-router-dom';
import SearchBoxContainer from '../components/containers/SearchBoxContainer';

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
        <SearchBoxContainer />

        <div className="mobile-navigation"></div>
      </div>
    </header>
  )
}
export default Navigation;
