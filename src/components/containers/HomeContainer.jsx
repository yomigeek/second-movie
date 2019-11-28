import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../styles/app.scss';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import { getAllMovies } from '../../actions/movieAction';

class Home extends Component {

   /**
   * @description Fetches all the scheduled movies
   */
 componentDidMount = async () => {
  const { getAppAllMovies } = this.props;
  await getAppAllMovies();
}

  render(){
    const {  allMovies, loading, message } = this.props;
    return(
      <Fragment>
        <div id="site-content">
          <Navigation />
          <MovieList
            loader={loading}
            message={message}
            movies={allMovies}
          />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies,
  loading: state.loader.appLoader,
  message: state.messages.appMessage
});

export const mapDispatchToProps = dispatch => ({
  getAppAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
