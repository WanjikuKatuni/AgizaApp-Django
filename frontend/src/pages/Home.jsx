import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api";


// component that renders customer management functionality. 
// allows user to add, view and delete customers.

function Home() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerCode, setCustomerCode] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  //   get customers as soon as page loads
  useEffect(() => {
    getCustomers();
  }, []);

  // get all customers posted
  const getCustomers = () => {
    api
      .get("/api/customers/")
      .then((res) => res.data)
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  //   delete customer
  const deleteCustomer = (id) => {
    api
      .delete(`/api/customers/details/${id}/`)
      .then((res) => {
        if (res.status === 204) {
             alert("Customer deleted!");
            getCustomers();
        }
        else alert("Failed to delete customer");
      })
      .catch((error) => alert(error));
  };

  //   create customer
  const createCustomer = (e) => {
    e.preventDefault();
    api
      .post("/api/customers/", { customerName, customerCode, phonenumber })
      .then((res) => {
        if (res.status === 201) {
        alert("Customer created!");
        getCustomers();
        }
        else alert("Failed to create customer");
      })
      .catch((err) => alert(err));
  };

  return (


        <>
        <div>
           <h1>Customers</h1>
        </div>
        
        <h2>Add Customer</h2>
        <form onSubmit={createCustomer}>
          <label htmlFor="customerName">Customer Name:</label>
          <br />
          <input type="text" id="customerName" name="customerName" required onChange={(e) => setCustomerName(e.target.value)}
          value={customerName} />
          
          <label htmlFor="customerCode">Customer Code:</label>
          <br />
          <input type="text" id="customerCode" name="customerCode" required onChange={(e) => setCustomerCode(e.target.value)}
          value={customerCode} />
          
          <label htmlFor="phonenumber">Phone Number:</label>
          <br />
          <input type="text" id="phonenumber" name="phonenumber" required onChange={(e) => setPhoneNumber(e.target.value)}
          value={phonenumber} />

          <br />
          <input type="submit" value="Submit"></input>

          
        </form>
        </>
  )


}

export default Home;
