import axios from 'axios';
import React, { Component } from 'react'
class TransactionService extends Component {
   viewAllTransaction(accountId){
       return axios.get(`http://localhost:8080/iba/transaction/getAccountTransaction/${accountId}`)
   }
}
export default new TransactionService;