import React, { Component } from 'react';
import axios from 'axios';

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

  queryDB(query) {
    axios.get(`/api/getPostsByID?id=${query}`).then((dbres) => {
      this.setState({
        posts: dbres.data
      });
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
