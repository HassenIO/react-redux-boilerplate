import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
