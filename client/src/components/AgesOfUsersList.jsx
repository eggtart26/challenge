import React from "react";
import { Dropdown } from "react-bootstrap";
import AgesOfUsers from "./AgesOfUsers.jsx";
import AgesOfUsersTable from "./AgesOfUsersTable.jsx";
import { Table } from "react-bootstrap";

function AgesOfUsersList(props) {
  return (
    <div>
      <h3>Ages Of UsersList</h3>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Item
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.itemsData.map((item, i) => (
            <AgesOfUsers
              key={i}
              a={item}
              handleOnClick={props.handleOnClick}
              itemAge={props.itemAge}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div>
        {props.itemAge !== undefined && props.itemAge.length > 0 ? (
          <div>
            <Table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">AGE</th>
                  <th scope="col">COUNT</th>
                </tr>
              </thead>
              <tbody>
                {props.itemAge.map((age, i) => (
                  <AgesOfUsersTable key={i} {...age} />
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AgesOfUsersList;
