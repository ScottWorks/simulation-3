import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { getUserInfo } from '../../redux/reducer';
import { connect } from 'react-redux';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  registerUser() {
    const { username, password } = this.state;
    axios.post('/api/auth/register', { username, password }).then((nodeRes) => {
      const { id, username, profile_pic } = nodeRes.data;
      this.setState({
        username: '',
        password: '',
        redirect: true
      });
      this.props.getUserInfo(id, username, profile_pic);
    });
  }

  loginUser() {
    const { username, password } = this.state;
    axios.post('/api/auth/login', { username, password }).then((nodeRes) => {
      const { id, username, profile_pic } = nodeRes.data;
      this.setState({
        username: '',
        password: '',
        redirect: true
      });
      this.props.getUserInfo(id, username, profile_pic);
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h1>Auth</h1>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={(e) => this.handleChange('username', e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={(e) => this.handleChange('password', e.target.value)}
          />
        </label>
        <br />
        <button onClick={this.loginUser}>Login</button>
        <button onClick={this.registerUser}>Register</button>
      </div>
    );
  }
}

export default connect(null, { getUserInfo })(Auth);
