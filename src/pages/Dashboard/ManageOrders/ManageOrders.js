import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    fetch(`https://shrouded-reaches-47606.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleChangeStatus = (id) => {
    const url = `https://shrouded-reaches-47606.herokuapp.com/orders/${id}`;

    if (window.confirm("Are you sure to confirm this order?")) {
      const filteredOrder = orders.filter((order) => order._id === id);
      const updatedOrder = filteredOrder[0];
      updatedOrder.status = "shipped";
      console.log(updatedOrder);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("Status updated successfully");
            setOrderStatus(orders.status);
          }
        });
    }
  };
  const handleDeleteOrder = (id) => {
    const url = `https://shrouded-reaches-47606.herokuapp.com/orders/${id}`;

    if (window.confirm("Are you sure to delete this order?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Order deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container>
      <h1 className="text-dark fw-bold text-center mt-5 mb-4">
        {" "}
        Total Orders : {orders.length}
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        <div className="table-scrollable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>price</th>
                <th> Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th>Order Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productName}</td>
                  <td>
                    <img className="img-fluid" src={order.imgURL} alt="" />
                  </td>
                  <td>${order.price}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>{order.phone}</td>
                  <td className="text-warning">{order.status}</td>
                  <td>
                    <button
                      onClick={() => handleChangeStatus(order._id)}
                      className={`btn btn-success ${
                        order.status === "shipped" ? "btn-hidden" : "btn-active"
                      }`}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <small className="me-2">Approve</small>
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faCheck}
                        />
                      </div>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger btn-delete"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <small className="me-2">Delete</small>
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faTrashAlt}
                        />
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default ManageOrders;
