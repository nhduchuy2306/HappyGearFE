import axios from "axios";
import React, { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {};

  const handleDelete = (id, event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/happygear/api/products/delete/${id}`)
      .then((res) => {
        setData(data.filter((product) =>{
          return product.productId !== id
        }));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h1 className="text-center">Product Table</h1>
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
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <table className="table table-striped table-bordered table-responsive">
        <thead className="thead-light">
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Insurance Info</th>
            <th scope="col">Category Id</th>
            <th scope="col">Brand Id</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => {
            return (
              <tr key={p.productId}>
                <th scope="row">{p.productId}</th>
                <td>{p.productName}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.insuranceInfo}</td>
                <td>{p.categoryId}</td>
                <td>{p.brandId}</td>
                <td>{p.status === true ? "Available" : "Unavailable"}</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => handleDelete(p.productId, e)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
