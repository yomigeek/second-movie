import React from 'react'

const MovieList = (props) => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="breadcrumbs">
            <a href="index.html">Home</a>
          </div>
          <div className="movie-list">
            <div className="movie">
              <figure className="movie-poster">
                <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="#" />
              </figure>
              <div className="movie-title"><a href="single.html">Maleficient</a></div>
              <div>
                <span className="movie-rating">
                  Rating: 6/10
                </span>
                <span className="movie-year">
                  Year: 2017
                </span>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
            </div>
            <div className="movie">
              <figure className="movie-poster">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51aP0HfLTkL.jpg" alt="#" height="100px" width="100px" />
              </figure>
              <div className="movie-title"><a href="single.html">Maleficient</a></div>
              <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
            </div>
            <div className="movie">
              <figure className="movie-poster"><img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg" alt="#" height="100px" width="100px" /></figure>
              <div className="movie-title"><a href="single.html">Maleficient</a></div>
              <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
            </div>
            <div className="movie">
              <figure className="movie-poster"><img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="#" /></figure>
              <div className="movie-title"><a href="single.html">Maleficient</a></div>
              <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
            </div>
          </div>

          <div className="pagination">
            <a href="p" className="page-number prev"><i className="fa fa-angle-left"></i></a>
            <span className="page-number current">1</span>
            <a href="page" className="page-number">2</a>
            <a href="page" className="page-number">3</a>
          
            <a href="p" className="page-number next"><i className="fa fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </main>
  )
}
export default MovieList;
