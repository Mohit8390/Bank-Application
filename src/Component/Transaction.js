import React, { Component } from 'react'
import TransactionService from '../Services/TransactionService'

export default class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountId: localStorage.getItem('accountId'),
            transaction: []
        }
    }
    componentDidMount() {
        TransactionService.viewAllTransaction(this.state.accountId).then((res) => {
            this.setState({ transaction: res.data })
            console.log(res.data)
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                <div className="row">
                    <div className="text-center mt-3 col-sm-12">
                        <h4 style={{ color: "white", fontWeight: "bold" }}>Transactions</h4>
                    </div>
                    <div className="col-sm-11">
                        <table class="table ml-5 mt-2 mb-5">
                            <thead style={{backgroundColor:"white"}}>
                                <tr>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date of Transaction</th>
                                </tr>
                            </thead>
                            <tbody style={{color:"white"}}>
                                {
                                    this.state.transaction.map(tran=>(
                                      <tr><th scope="row" className="ml-5">{tran.transactionId}</th>
                                    <td>{tran.amount}</td>
                                    <td>{tran.transactionType}</td>
                                    <td>{tran.transactionStatus}</td>
                                    <td>{tran.dateTime}</td>
                                    </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
