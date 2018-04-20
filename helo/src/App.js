import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth';
import routes from './route';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
