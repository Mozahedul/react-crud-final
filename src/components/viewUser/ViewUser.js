import React from "react";
import { Table } from "react-bootstrap";
import { useStateValue } from "../../contextApi/stateProvider";
import ViewTableData from "./ViewTableData";

const ViewUser = () => {
  const [{ userCount }] = useStateValue();

  return (
    <div className="ViewUser d-flex justify-content-center mt-4">
      <div className="col-xs-12 col-md-10">
        {userCount.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Serial</th>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userCount.map((item, index) => (
                <ViewTableData
                  key={item.id}
                  id={item.id}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  password={item.password}
                  index={index}
                />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="alert alert-danger">No Records on the User List</div>
        )}
      </div>
    </div>
  );
};

export default ViewUser;
