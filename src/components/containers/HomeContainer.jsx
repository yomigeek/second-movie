import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import paginate from 'paginate-array';
import '../../styles/app.scss';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import { getAllMovies, searchMovie } from '../../actions/movieAction';

class Home extends PureComponent {
  state = {
    searchInput: '',
    size: 4,
    page: 1,
    currentPage: null,
    appMovieList: [],
  }
  /**
   * @description Fetches all the scheduled movies
  */
 UNSAFE_componentWillMount = async () => {
  const { getAppAllMovies } = this.props;
  await getAppAllMovies();
  const { page, size } = this.state;
  const currentPage = paginate(this.props.allMovies, page, size);

  this.setState({
    ...this.state,
    appMovieList: this.props.allMovies,
    currentPage,
  });

}

previousPage = () => {
  const { page, size, appMovieList } = this.state;

  if (page > 1) {
    const newPage = page - 1;
    const newCurrentPage = paginate(appMovieList, newPage, size);

    this.setState({
      ...this.state,
      page: newPage,
      currentPage: newCurrentPage
    });
  }
}

nextPage = () => {
  const { currentPage, page, size, appMovieList } = this.state;
  console.log('nx', appMovieList);

  if (page < currentPage.totalPages) {
    const newPage = page + 1;
    const newCurrentPage = paginate(appMovieList, newPage, size);
    this.setState({ ...this.state, page: newPage, currentPage: newCurrentPage });
  }
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
    const { page, currentPage } = this.state;
    let currentPageMoviesData, currentPageNewNumber;
    if (currentPage === null) {
      currentPageMoviesData = allMovies
    }
    else {
      currentPageMoviesData = currentPage.data;
      currentPageNewNumber = currentPage.totalPages;
    }

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
            movies={currentPageMoviesData}
            prevHandler={this.previousPage}
            nextHandler={this.nextPage}
            appCurrentPage={page}
            appLastPage={currentPageNewNumber}
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
