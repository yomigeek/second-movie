import React from 'react';
import Loader from './Loader';
import MovieCard from './MovieCard';
import HeaderBreadCrumb from './HeaderBreadCrumb';


const SearchMovieList = ({
  loader, networkMessage, movies, keyword
}) => {
  let appMovieList;
  if(movies.length > 0) {
    appMovieList =  <div className="movie-list"> {movies.map( movie => <MovieCard key={movie.show.id} movieInfo={movie} />)}</div>
  }
  else  {
    appMovieList = <div className="empty-movie-list">'No movies found!'</div>
  }
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <HeaderBreadCrumb />
          <div className="search-page-title">
            Search Result for ' <i>{keyword}</i>  '
          </div>
          <div>
            {
              loader ? 
                <Loader 
                  loaderUrl="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574948893/loader_mmch8g.svg"
                  loadingText="Loading Search Results..."
                /> 
              : 
              appMovieList
            }
            {
              networkMessage ? <div className="message-box">{networkMessage}</div> : ''
            }
          </div>

          
        </div>
      </div>
    </main>
  )
}
export default SearchMovieList;
