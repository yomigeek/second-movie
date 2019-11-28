import React from 'react';
import Loader from './Loader';
import MovieCard from './MovieCard';
import HeaderBreadCrumb from './HeaderBreadCrumb';


const MovieList = ({
  loader, networkMessage, movies
}) => {
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
                    movies.map( movie => <MovieCard key={movie.show.id} movieInfo={movie} />)
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
              <a href="p" className="page-number prev"><i className="fa fa-angle-left"></i></a>
              <span className="page-number current">1</span>
              <a href="page" className="page-number">2</a>
              <a href="page" className="page-number">3</a>
            
              <a href="p" className="page-number next"><i className="fa fa-angle-right"></i></a>
            </div>
          }
          
        </div>
      </div>
    </main>
  )
}
export default MovieList;
