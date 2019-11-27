import React, { Component, Fragment } from 'react';
import '../../styles/app.scss';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';

class Home extends Component {

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
export default Home;
