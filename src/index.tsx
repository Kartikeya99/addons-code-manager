import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import log from 'loglevel';

import './styles.scss';
import App from './components/App';
import configureStore from './configureStore';

if (process.env.NODE_ENV === 'production') {
  // The second parameter prevents the log level to be persisted in a cookie or
  // localStorage.
  log.setLevel(log.levels.INFO, false);
} else {
  log.setLevel(log.levels.DEBUG, false);
}

const store = configureStore();

const rootElement = document.getElementById('root') as HTMLElement;
const authToken = (rootElement && rootElement.dataset.authToken) || null;

if (authToken === process.env.REACT_APP_AUTH_TOKEN_PLACEHOLDER) {
  throw new Error(
    `Runtime error: authentication token placeholder should not be present`,
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App authToken={authToken} />
    </BrowserRouter>
  </Provider>,
  rootElement,
);
