import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../styles/app.scss';
import { searchMovie } from '../../actions/movieAction';

class SearchBoxContainer extends PureComponent {

  state = {
    keyword: {
      searchInput: '',
      queryKeyword: ''
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
    const { queryMovie } = this.props;
    const searchKeyword = Object.assign({}, this.state);
    const newKeyword = searchKeyword.keyword.searchInput;
    await queryMovie(newKeyword);
    window.location.href = `/search?q=${newKeyword}`;
  }

  render() {
    const { keyword } = this.state;

    return (
      <Fragment>
        <div className="main-navigation">
          <form onSubmit={this.searchHandler}>
            <input
              type="text"
              placeholder="Search..."
              onChange={this.searchInputHandler}
              value={keyword.searchInput}
              required
            />
            <button onClick={this.searchHandler}><i className="fa fa-search"></i></button>
          </form>
        </div>
        {/* </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
