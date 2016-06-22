import React, { Component } from 'react';
import UserList from './user-list';
import UserDetail from './user-detail';

class Overview extends Component {
  render(){
    return (
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}

export default Overview;
