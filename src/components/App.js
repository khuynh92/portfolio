import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route path='/' component={Dashboard} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
