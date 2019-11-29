import React, { Fragment } from 'react'
import Loader from './Loader';
import SingleMovieCard from './SingleMovieCard';
import HeaderBreadCrumb from './HeaderBreadCrumb';

const SingleMovie = (props) => {
  const { movieInfo, loader, networkMessage, movieCast } = props;
  const movieCard = <SingleMovieCard
    movieInfo={movieInfo}
    movieCast={movieCast}
    loader={loader}
  />
  return (
    <Fragment>
      <main className="main-content">
        <div className="container">
          <div className="page">
            <HeaderBreadCrumb />
            {
              loader ?
                <Loader
                  loaderUrl="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574948893/loader_mmch8g.svg"
                  loadingText="Loading Movie Information..."
                />
                :
                networkMessage ? <div className="message-box">{networkMessage}</div> : movieCard

            }

          </div>
        </div>
      </main>
    </Fragment>
  )
}
export default SingleMovie;
