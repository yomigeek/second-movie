import React from 'react';
import SingleMovieCast from './SingleMovieCast';

const SingleMovieCard = (props) => {
  const { movieInfo, movieCast } = props;
  let movieImg, movieSummary, movieScheduleTime, movieScheduleDays;
  if (movieInfo.image === undefined || movieInfo.image === null) {
    movieImg = 'https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574964550/no-img_embffd.png';
  }
  else {
    movieImg = movieInfo.image.original;
    movieSummary = movieInfo.summary.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
    movieScheduleTime = movieInfo.schedule.time;
    movieScheduleDays = movieInfo.schedule.days;
  }
  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6">
          <figure className="movie-poster">
            <img src={movieImg}
              className="single-movie-img "
            alt="#" />
          </figure>
        </div>
        <div className="col-md-6">
          <h2 className="movie-title">
            {
              movieInfo.name
            }
          </h2>
          <div className="movie-summary">
            <p>
              {movieSummary}
            </p>  
          </div>
          <ul className="movie-meta">
            <li>
              <strong>Language:</strong> {movieInfo.language}
            </li>
            <li><strong>Time:</strong> {movieInfo.runtime} min</li>
            <li><strong>Premiere(d):</strong> {movieInfo.premiered} (USA)</li>
            <li><strong>Type:</strong> {movieInfo.type}</li>
          </ul>

          <ul className="starring">
            <li><strong>Schedule:</strong> {movieScheduleDays + ` `} ({movieScheduleTime})</li>
            <li><strong>Status:</strong> {movieInfo.status}</li>

          </ul>
        </div>
      </div>
      <h3>Casts </h3>
      <hr />
      <br />
      <div className="row">
        
        {
          movieCast.length > 0 
          ? 
            movieCast.map( cast => 
            <SingleMovieCast 
              key={cast.person.id} 
              castInfo={cast} 
              castList={true}
            />)
          :
          <SingleMovieCast 
            castList={false}
          />
        }
        
      </div>
    </div>
  )
}
export default SingleMovieCard;
