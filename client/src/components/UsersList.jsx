import React from "react";
import Users from "./Users.jsx";
import { Table } from "react-bootstrap";

function UsersList(props) {
  return (
    <div>
      <h3>All Users</h3>
      <p>Users and their age</p>
      <Table className="table table-striped">
        <thead>
          <th scope="col">Username</th>
          <th scope="col">Age</th>
        </thead>
        <tbody>
          {props.usersData.map((user, i) => (
            <Users key={i} {...user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersList;
