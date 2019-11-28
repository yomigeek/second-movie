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
   * @returns {null}
   */
 componentDidMount = async () => {
  const { getAppAllMovies } = this.props;
  const response = await getAppAllMovies();
  console.log(response, 'in class');
}

  render(){
    return(
      <Fragment>
        <div id="site-content">
          <Navigation />
          <MovieList />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allMovies: state.movies.allMovies,
});

export const mapDispatchToProps = dispatch => ({
  getAppAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
