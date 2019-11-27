import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Page404 from './Page404';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>
);

export default App;
