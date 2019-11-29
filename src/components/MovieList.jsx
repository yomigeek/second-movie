import React from 'react';
import Loader from './Loader';
import MovieCard from './MovieCard';
import HeaderBreadCrumb from './HeaderBreadCrumb';

const MovieList = ({
  loader, networkMessage, movies, prevHandler, nextHandler, appCurrentPage, appLastPage
}) => {
  let prevDisabled, nextDisabled;
  if (appCurrentPage === 1) {
    prevDisabled = true;
  }
  if (appCurrentPage === appLastPage) {
    nextDisabled = true;
  }
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <HeaderBreadCrumb />
          <div>
            {
              loader ?
                <Loader
                  loaderUrl="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574948893/loader_mmch8g.svg"
                  loadingText="Loading Movies..."
                />
                :
                <div className="movie-list">
                  {
                    movies.map(movie => <MovieCard key={movie.show.id} movieInfo={movie} />)
                  }
                </div>
            }
            {
              networkMessage ? <div className="message-box">{networkMessage}</div> : ''
            }
          </div>

          {
            loader ?
              '' :
              <div className="pagination">
                <button
                  className="pagination-button page-number"
                  onClick={prevHandler}
                  disabled={prevDisabled}
                >
                  {`Prev`}
                </button>
                <button
                  className="pagination-button page-number"
                  onClick={nextHandler}
                  disabled={nextDisabled}
                >
                  {`Next`}
                </button>
              </div>
          }
        </div>
      </div>
    </main>
  )
}
export default MovieList;
