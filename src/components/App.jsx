import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/HomeContainer';
import Page404 from './Page404';
import SingleMovie from '../components/containers/SingleMovieContainer'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:movieId" component={SingleMovie} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>
);

export default App;
