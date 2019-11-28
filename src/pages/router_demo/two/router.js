import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Main from '../one/main'
import About from '../one/about'
import Home from './home'

export default class Bouter extends React.Component {

  render() {
    return (
      <Router>
        <Home>
          <Route path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
        </Home>
      </Router>
    );
  }
}