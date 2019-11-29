import React, { PureComponent, Fragment } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import '../../styles/app.scss';
import Footer from '../Footer';
import Navigation from '../Navigation';
import { searchMovie } from '../../actions/movieAction';
import SearchMovieList from '../SearchMovieList';

let searchQuery;

class SearchMovieContainer extends PureComponent {

  state = {
    keyword: {
      searchInput: '',
      queryKeyword: ''
    }
  }

  componentDidMount = async () => {
    const {
      history, location, queryMovie, searchResult,
    } = this.props;
    const queryParam = queryString.parse(location.search);
    searchQuery = queryParam.q;

    if (!searchQuery) {
      history.push('/');
    }

    /**
     * @description searches the movie db based on the query parameter when the page is reloaded
     * as result of state been cleared during reload
     */
    if (searchResult.length < 1) {
      queryMovie(searchQuery);
      this.setSearchInputState(searchQuery);
    }

  }

  setSearchInputState = (searchInput) => {
    this.setState({ keyword: { searchInput: searchInput, queryKeyword: searchInput } });
  };

  searchInputHandler = (event) => {
    const { keyword } = this.state;
    this.setState({
      keyword: {
        ...keyword,
        searchInput: event.target.value,
        queryKeyword: keyword.searchInput
      }
    });
  }

  searchHandler = async (event) => {
    event.preventDefault();
    const { queryMovie, history, location } = this.props;
    const searchKeyword = Object.assign({}, this.state);
    const newKeyword = searchKeyword.keyword.searchInput;
    await queryMovie(newKeyword);
    history.push(`/search?q=${newKeyword}`, { from: location.pathname });
  }

  render() {
    const { searchResult, loading, location, networkMessage } = this.props;
    const { keyword } = this.state;
    const queryParam = queryString.parse(location.search); 
    const appSearchKeyword = queryParam.q;

    return (
      <Fragment>
        <div id="site-content">
          <Navigation
            searchInputHandler={this.searchInputHandler}
            submitHandler={this.searchHandler}
            keyword={keyword.searchInput}
          />
          <SearchMovieList
            loader={loading}
            networkMessage={networkMessage}
            movies={searchResult}
            keyword={appSearchKeyword}
          />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loader.appLoader,
  networkMessage: state.messages.networkMessage,
  searchResult: state.movies.movieSearchList
});

export const mapDispatchToProps = dispatch => ({
  queryMovie: (keyword) => dispatch(searchMovie(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieContainer);
