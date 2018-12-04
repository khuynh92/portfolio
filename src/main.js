import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import App from './components/App.js';

import './style/main.scss';

class Main extends Component {

  render() {
    return (
      <Fragment>
        <Favicon url='https://raw.githubusercontent.com/khuynh92/portfolio/master/src/assets/favicon.png' />
        <App />
      </Fragment>
    );
  }

}
ReactDOM.render(<Main />, document.getElementById('root'));