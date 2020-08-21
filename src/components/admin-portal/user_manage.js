import React, { Component } from "react";
import {
  getVerifiedUsers,
  changePaidStatus,
} from "../../services/adminService";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
    };
  }

  getUsers = () => {
    getVerifiedUsers().then((response) => {
      this.setState({ users: response.data, filteredUsers: response.data });
    });
  };

  changePaidStatus = (email, paidStatus) => {
    changePaidStatus(email, paidStatus);
    setTimeout(() => {
      this.getUsers();
    }, 100);
  };

  search = () => {
    let serachText = document.getElementById("search-text").value;
    if (serachText) {
      let filteredUsers = this.state.users.filter((user) => {
        return user.email.indexOf(serachText) > -1;
      });
      this.setState({ filteredUsers: filteredUsers });
    } else {
      this.setState({ filteredUsers: this.state.users });
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="admin-page user-page">
        <div className="user-page-search">
          <input
            id="search-text"
            type="text"
            placeholder="Search by Email ID"
            onKeyUp={this.search}
          />
          {/* <button className="search-button" onClick={this.search}>
            Search
          </button> */}
        </div>
        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>User ID</th>
                <th>Paid Status</th>
                <th>Change Status</th>
                <th>Registered On</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredUsers.length > 0
                ? this.state.filteredUsers.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {user.first_name} {user.last_name}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.is_paid_user ? "Paid" : "Unpaid"}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.changePaidStatus(
                                user.email,
                                user.is_paid_user
                              );
                            }}
                          >
                            {!user.is_paid_user ? "Paid" : "Unpaid"}
                          </button>
                        </td>
                        <td>{user.created_on.split("T")[0]}</td>
                        {/* <td>{new Date(user.created_on).getDate}/{new Date(user.created_on).getMonth}/{new Date(user.created_on).getFullYear}</td> */}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserManage;
