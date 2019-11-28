import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
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
        {this.props.children}
      </div>
    );
  }
}