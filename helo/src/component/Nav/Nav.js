import React from 'react';
import Auth from '../../component/Auth/Auth';
import Dashboard from '../../component/Dashboard/Dashboard';
import Form from '../../component/Form/Form';
import Post from '../../component/Post/Post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
  console.log(props.username, props.profile_pic);
  return (
    <div>
      <h1>Nav</h1>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>

      <Link to="/new">
        <button>New Post</button>
      </Link>

      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profile_pic: state.profile_pic
  };
}

export default connect(mapStateToProps)(Nav);
