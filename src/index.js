import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App';

const history = createBrowserHistory();
const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </Provider>

, document.getElementById('root'));
