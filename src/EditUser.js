import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSingleUser, editUserTyping, submitEdits } from "./actions/userActions";

import { BASE_URL } from "./config/app-constants";

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this
    .props
    .editUserTyping(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    this
    .props
    .submitEdits(this.props.match.params.id, this.props.usersState)
    .then(() => {
      this.props.history.push("/");
    })
    .catch((err) => {
      alert("Error saving user edits");
    });
  }

  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="small-container">
        	<h1>User Manager</h1>

        	<div>
        		<a href="#" className="btn btn-primary">Back</a>
        	</div>
        </div>

        <div className="small-container margin-top-20">
          <form onSubmit={this.handleSubmit}>
          	<div className="well">
          		<div className="bold">
          			First Name
          		</div>
          		<div className="margin-top-20">
          			<input onChange={this.handleChange} name="firstname" value={this.props.usersState.firstname} type="text" className="form-control" />
          		</div>
          		<div className="bold margin-top-20">
          			Last Name
          		</div>
          		<div className="margin-top-20">
          			<input onChange={this.handleChange} name="lastname" value={this.props.usersState.lastname} type="text" className="form-control" />
          		</div>
          		<div className="bold margin-top-20">
          			Username
          		</div>
          		<div className="margin-top-20">
          			<input onChange={this.handleChange} name="username" value={this.props.usersState.username} type="text" className="form-control" />
          		</div>
          		<div className="bold margin-top-20">
          			Email
          		</div>
          		<div className="margin-top-20">
          			<input onChange={this.handleChange} name="email" value={this.props.usersState.email} type="text" className="form-control" />
          		</div>
          		<div className="margin-top-20 txt-right">
          			<a href="#" className="btn btn-default">Cancel</a>
          			<button type="submit" className="btn btn-primary">Edit User</button>
          		</div>
          	</div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersState: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleUser: bindActionCreators(getSingleUser, dispatch),
    editUserTyping: bindActionCreators(editUserTyping, dispatch),
    submitEdits: bindActionCreators(submitEdits, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
