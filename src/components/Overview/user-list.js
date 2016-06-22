import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, fetchUsers } from '../../actions/index';
import { bindActionCreators } from 'redux';

class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderList(){
    return this.props.users.map((user) => {
      return (
        <tr
          key={user.id}
          onClick={() => this.props.selectUser(user)}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      );
    });
  }

  render(){
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectUser, fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
