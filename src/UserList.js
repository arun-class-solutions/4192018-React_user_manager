import React, { Component } from "react";
import axios from "axios";

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
    .get("https://myapi-profstream.herokuapp.com/api/403281/persons")
    .then((response) => {
      // To get body of response, it is response.data
      this.setState({
        users: response.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
        	<h1>User Manager</h1>

        	<div>
        		<a href="#" className="btn btn-primary" data-target="#add-user-modal" data-toggle="modal">Add User</a>
        	</div>
        </div>

        <div className="container margin-top-20">
        	<table className="table striped">
        		<thead>
              <tr>
          			<th>First Name</th>
          			<th>Last Name</th>
          			<th>Username</th>
          			<th>Email</th>
          			<th>Action</th>
              </tr>
        		</thead>

        		<tbody>
              {this.state.users.map((user, index) => {
                return (
            			<tr key={index}>
            				<td>
            					{user.firstname}
            				</td>
            				<td>
            					{user.lastname}
            				</td>
            				<td>
            					{user.username}
            				</td>
            				<td>
            					{user.email}
            				</td>
            				<td>
            					<a href="#" className="btn btn-primary">Edit</a>
            				</td>
            			</tr>
                )
              }) }
        		</tbody>
        	</table>
        </div>

        <div id="add-user-modal" className="modal fade">
        	<div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header">
        				<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        				<h4 className="modal-title">Add a User</h4>
        			</div>
        			<div className="modal-body">
        				<div className="bold">
        					First Name
        				</div>
        				<div className="margin-top-20">
        					<input name="firstname" type="text" className="form-control" placeholder="First Name" />
        				</div>
        				<div className="bold margin-top-20">
        					Last Name
        				</div>
        				<div className="margin-top-20">
        					<input name="lastname" type="text" className="form-control" placeholder="Last Name" />
        				</div>
        				<div className="bold margin-top-20">
        					Username
        				</div>
        				<div className="margin-top-20">
        					<input name="username" type="text" className="form-control" placeholder="Username" />
        				</div>
        				<div className="bold margin-top-20">
        					Email
        				</div>
        				<div className="margin-top-20">
        					<input name="email" type="text" className="form-control" placeholder="Email" />
        				</div>
        			</div>
        			<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        				<button type="submit" className="btn btn-primary">Save User</button>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default UserList;
