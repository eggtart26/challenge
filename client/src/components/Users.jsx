import React from "react";
import { Table } from "react-bootstrap";

function Users(props) {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.age}</td>
    </tr>
  );
}

export default Users;
