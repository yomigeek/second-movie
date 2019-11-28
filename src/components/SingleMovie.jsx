import React, { Fragment } from 'react'
import Loader from './Loader';
import SingleMovieCard from './SingleMovieCard';
import HeaderBreadCrumb from './HeaderBreadCrumb';

const SingleMovie = (props) => {
  const { movieInfo, loader, message, movieCast } = props;
    
  return(
    <Fragment>
      <main className="main-content">
              <div className="container">
                <div className="page">
                <HeaderBreadCrumb />
              {
                message ? <div className="message-box">{message}</div> : ''
              }
              {
              loader ? 
                <Loader 
                  loaderUrl="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574948893/loader_mmch8g.svg"
                  loadingText="Loading Movie Information..."
                /> 
              : 
              <SingleMovieCard 
                movieInfo={movieInfo}
                movieCast={movieCast}
              />
                
            }
              
          </div>
         </div>
      </main>
    </Fragment>
  )
}
export default SingleMovie;
