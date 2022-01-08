import axios from 'axios';
import React, { Component } from 'react'
 class CustomerService extends Component {
    login(email,password){
        return axios.get(`http://localhost:8080/iba/customers/Login/${email}/${password}`);
    }
    viewCustomer(customerId)
    {
        return axios.get(`http://localhost:8080/iba/customers/findById/${customerId}`)
    }
}
export default new CustomerService;
