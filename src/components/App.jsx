import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Page404 from './Page404';
import SingleMovie from '../components/containers/SingleMovieContainer';
import SearchMovieContainer from './containers/SearchMovieContainer';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/movie/:movieId" component={SingleMovie} />
      <Route exact path="/search" component={SearchMovieContainer} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>
);

export default App;
