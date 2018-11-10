import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import About from './About.js';
import Photos from './Photos.js';
import Projects from './Projects.js';


export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About}/>
          {/* <Route path='/projects' component={Projects}/> */}
          <Route path='/projects' component={Dashboard}/>
          <Route path='/photos' component={Photos}/>

        </React.Fragment>
      </HashRouter>
    );
  }
}
