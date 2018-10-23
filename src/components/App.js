import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import About from './About.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
