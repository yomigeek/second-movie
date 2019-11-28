import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../styles/app.scss';
import Footer from '../Footer';
import Navigation from '../Navigation';
import { getSingleMovie } from '../../actions/movieAction';
import SingleMovie from '../SingleMovie';

class SingleMovieContainer extends Component {

   /**
   * @description Fetches the single movie info
   */
 componentDidMount = async () => {
  const { getMovieInfo, match } = this.props;
  const { movieId } = match.params;
  await getMovieInfo(movieId);
}

  render(){
    const {  movie, loading, message, cast } = this.props;
    return(
      <Fragment>
        <div id="site-content">
          <Navigation />
          <SingleMovie
            loader={loading}
            message={message}
            movieInfo={movie}
            movieCast={cast}
          />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.singleMovie,
  cast: state.movies.movieCast,
  loading: state.loader.appLoader,
  message: state.messages.appMessage
});

export const mapDispatchToProps = dispatch => ({
  getMovieInfo: (id) =>  dispatch(getSingleMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer);
