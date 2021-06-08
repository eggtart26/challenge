import React from "react";

function AgesOfUsersTable(props) {
  return (
    <tr>
      <td>{props.age}</td>
      <td>{props.count}</td>
    </tr>
  );
}

export default AgesOfUsersTable;
