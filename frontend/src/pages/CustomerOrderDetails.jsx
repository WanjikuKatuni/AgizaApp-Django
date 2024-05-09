import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Order from "../components/Order";

function CustomerOrderDetails() {
  const [orders, setOrders] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const { customerId } = useParams();
  // console.log(customerId)

  // get all ordersof the customer as soon as the page loads/mounts
  useEffect(() => {
    if(customerId) {
      getOrders();
    }
  }, [customerId]);

  // get all orders for the client
  const getOrders = () => {
    api
      .get(`/api/customers/details/${customerId}/orders/`)
      .then((res) => res.data)
      .then((data) => {
        setOrders(data);
        console.log(data);
      })
      .catch((err) => {
        alert(err)
        console.error(err)
      });
  };

  // delete order
  const deleteOrder = (orderId) => {
    api
      .delete(`/api/orders/details/${orderId}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Order deleted");
          getOrders();
        } else alert("Failed to delete order");
      })
      .catch((error) => alert(error));
  };

  // create an order
  const createOrder = (e) => {
    e.preventDefault();

    // console.log(customerId)
    // console.log(itemName)
    // console.log(itemAmount)
    // console.log(customer)

    api
      .post(`/api/customers/details/${customerId}/orders/`, {
        itemName,
        itemAmount,
        customer: customerId,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Order added");
          getOrders();
        } else alert("Failed to add order");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <h1>Client Orders</h1>

      <h2>Add Order</h2>
      <form onSubmit={createOrder}>
        <label htmlFor="itemName">Item Name:</label>
        <br />
        <input
          type="text"
          id="itemName"
          name="itemName"
          required
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
        />

        <label htmlFor="itemAmount">Item Amount:</label>
        <br />
        <input
          type="number"
          id="itemAmount"
          name="itemAmount"
          required
          onChange={(e) => setItemAmount(e.target.value)}
          value={itemAmount}
        />

        <br />
        <input type="submit" value="Submit"></input>
      </form>

      {/* list of orders */}
      <div>
        <h2>Order List</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ItemName</th>
              <th scope="col">ItemAmount</th>
              <th scope="col">Time</th>
              <th scope="col">Created_by</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order order={order} onDelete={deleteOrder} key={order.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerOrderDetails;
