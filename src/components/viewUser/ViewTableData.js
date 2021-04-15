import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/stateProvider";

const ViewTableData = ({ id, firstName, lastName, email, password, index }) => {
  const [, dispatch] = useStateValue();
  const removeHandle = () => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td>
        <Link className="btn btn-warning btn-sm" to={`/edit/${id}`}>
          Edit
        </Link>
        <Button onClick={removeHandle} className="btn btn-danger btn-sm ml-2">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ViewTableData;
