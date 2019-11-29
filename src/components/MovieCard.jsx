import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movieInfo } = props;
  let movieSummary, movieImg;
  movieSummary = 'No summary available!';
  movieImg = 'https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574964550/no-img_embffd.png';

  if (movieInfo.show.image !== null) {
    movieImg = movieInfo.show.image.medium;
  }
  if (movieInfo.show.summary !== null) {
    movieSummary = movieInfo.show.summary.substring(0, 150).replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "") + `...`
  }
  return (
    <Fragment>
      <div className="movie">
        <figure className="movie-poster">
          <img src={movieImg} alt="#" />
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
            {movieInfo.show.language}
          </span>
        </div>
        <p>
          {
            movieSummary
          }
        </p>
      </div>
    </Fragment>
  )
}
export default MovieCard;
