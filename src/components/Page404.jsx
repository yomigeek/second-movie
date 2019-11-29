import React, { Fragment } from 'react'
import Navigation from './Navigation';

const Page404 = () => {
  return (
    <Fragment>
      <Navigation

      />
      <main className="main-content">
        <div className="container">
          <div className="page">
            <div className="page-404-text">
              <img
                src="https://cdn.dribbble.com/users/1963449/screenshots/5915645/404_not_found_2x.png"
                height="250px"
                width="350px"
                alt="#"
              />
            </div>

          </div>
        </div>
      </main>
    </Fragment>
  )
}
export default Page404;
