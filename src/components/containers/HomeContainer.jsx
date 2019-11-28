import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../styles/app.scss';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import { getAllMovies, searchMovie } from '../../actions/movieAction';

class Home extends PureComponent {
  state = {
    searchInput: ''
  }
   /**
   * @description Fetches all the scheduled movies
   */
 componentDidMount = async () => {
  const { getAppAllMovies } = this.props;
  await getAppAllMovies();
}

searchInputHandler = (event) => {
  this.setState({
    searchInput: event.target.value
  })
}

searchHandler = async (event) => {
  event.preventDefault();
  const { queryMovie, history, location } = this.props;
  const searchKeyword = Object.assign({}, this.state);
  await queryMovie(searchKeyword.searchInput);
  history.push(`/search?q=${searchKeyword.searchInput}`, { from: location.pathname });

}

  render(){
    const {  allMovies, loading, networkMessage } = this.props;
    return(
      <Fragment>
        <div id="site-content">
          <Navigation
            searchInputHandler={this.searchInputHandler}
            submitHandler={this.searchHandler}
            keyword={this.state.searchInput}
          />
          <MovieList
            loader={loading}
            networkMessage={networkMessage}
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
  networkMessage: state.messages.networkMessage
});

export const mapDispatchToProps = dispatch => ({
  getAppAllMovies: () => dispatch(getAllMovies()),
  queryMovie: (keyword) => dispatch(searchMovie(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
