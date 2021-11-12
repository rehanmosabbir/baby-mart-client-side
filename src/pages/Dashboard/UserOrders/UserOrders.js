import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

  const handleDeleteOrder = (id) => {
    const url = `http://localhost:5000/orders/${id}`;

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
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">User Order</h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        <div className="table-responsive-lg">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Service Name</th>
                <th>Service Image</th>
                <th>price</th>
                <th> Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.productName}</td>
                  <td>
                    <img className="img-fluid" src={order.imgURL} alt="" />
                  </td>
                  <td>${order.price}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>{order.phone}</td>
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

export default UserOrders;
