import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
// import { selectUser } from '../../actions/index';
// import { bindActionCreators } from 'redux';

class UserDetail extends Component {
  render(){

    const { fields: { name, email, username, phone, website, street, city, shouldFire, department }} = this.props;

    if(!this.props.user){
      return <div>Select a user:</div>
    }

    return (
      <form className="form-horizontal">
      <div className="well well well-sm">
        <div className="row">
          <div className="col-md-6">

            <legend>User Info</legend>
            <div className="form-group">
              <label htmlFor="inputName" className="col-md-3 control-label">Name</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputName" {...name} />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <legend>Address Info</legend>
            <div className="form-group">
              <label className="col-md-2 control-label">Street:</label>
              <div className="col-md-6">
                <label className="control-label">{this.props.user.street}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-md-3 control-label">Email</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputEmail" {...email} />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-md-2 control-label">Suite:</label>
              <div className="col-md-6">
                <label className="control-label">{this.props.user.suite}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="inputUserName" className="col-md-3 control-label">User Name</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputUserName" {...username} />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-md-2 control-label">City:</label>
              <div className="col-md-6">
                <label className="control-label">{this.props.user.city}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="inputDepartment" className="col-md-3 control-label">Department</label>
              <div className="col-md-6">
                <select
                  className="form-control"
                  id="department"
                  {...department}
                  // required syntax for reset form to work
                  // undefined will not change value to first empty option
                  // when resetting
                  value={department.value || ''}>
                  <option></option>
                  <option value="HR">HR</option>
                  <option value="I.T.">I.T.</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="inputShouldFire" className="col-md-3 control-label">Should Fire</label>
              <div className="col-md-1">
                <input type="checkbox" className="form-control" id="inputShouldFire" {...shouldFire} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>

    );
  }
}

function mapStateToProps(state){
  return {
    user: state.selectedUser,
    initialValues: state.selectedUser
  };
}

export default reduxForm({
  form: 'UserDetailForm',
  fields: ['name', 'email', 'username', 'phone', 'website', 'street', 'city', 'shouldFire', 'department']
}, mapStateToProps)(UserDetail);
