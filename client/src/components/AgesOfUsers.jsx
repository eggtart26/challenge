import React from "react";
import { Dropdown, Table } from "react-bootstrap";

function AgesOfUsers(props) {
  return (
    <div>
      <Dropdown.Item id={props.a} onClick={props.handleOnClick}>
        {props.a}
      </Dropdown.Item>
    </div>
  );
}

export default AgesOfUsers;
