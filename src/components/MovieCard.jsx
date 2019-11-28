import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movieInfo } = props;
  return(
    <Fragment>
        <div className="movie">
        <figure className="movie-poster">
          <img src={movieInfo.show.image.medium} alt="#" />
        </figure>
        <div className="movie-title">
          <Link to={`/movie/${movieInfo.show.id}`}>
            {movieInfo.show.name}
          </Link>
        </div>
        <div>
          <span className="movie-rating">
            Type: {movieInfo.show.type}
          </span>
          <span className="movie-year">
            Season: {movieInfo.season}
          </span>
        </div>
        <p>
          {
            movieInfo.show.summary.substring(0, 100).replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "") + `...`
          }
        </p>
      </div>
    </Fragment>
  )
}
export default MovieCard;
