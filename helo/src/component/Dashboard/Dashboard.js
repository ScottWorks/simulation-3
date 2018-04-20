import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      myPosts: true,
      posts: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <label>
          Search<input
            type="text"
            onChange={(e) => this.handleChange('search', e.target.value)}
          />
        </label>
        <button>Search</button>
        <br />
        <label>
          My Posts<input type="checkbox" />
        </label>
        <br />

        <button>Reset</button>
      </div>
    );
  }
}

export default Dashboard;
