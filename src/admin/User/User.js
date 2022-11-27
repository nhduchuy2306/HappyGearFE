import React, { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/happygear/api/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="mb-4">
        <h1 className="text-center">User Table</h1>
        <div className="">
          <form className="d-flex justify-content-end align-items-center">
            <div
              className="form-group mb-2 mr-2"
              style={{ marginRight: "20px" }}
            >
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Search........"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </form>
        </div>
      </div>
      <table className="table table-striped table-bordered table-responsive">
        <thead className="thead-light">
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">FullName</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Gender</th>
            <th scope="col">RoleId</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u) => {
            return (
              <tr key={u.userName}>
                <th scope="row">{u.userName}</th>
                <td>{u.fullName}</td>
                <td>*******</td>
                <td>{u.address}</td>
                <td>{u.email}</td>
                <td>{u.phoneNumber}</td>
                <td>{u.gender?"Male":"Female"}</td>
                <td>{u.roleId}</td>
                <td>{u.status?"active":"disabled"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
