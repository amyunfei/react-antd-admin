import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import About from './about'
import Main from './main'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/text">Text</Link>
            </li>
            <li>
              <Link to="/bg">Bg</Link>
            </li>
          </ul>
          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/about" component={About}></Route> */}
        </div>
      </HashRouter>
    );
  }
}