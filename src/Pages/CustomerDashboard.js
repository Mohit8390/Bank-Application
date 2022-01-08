import React, { Component } from 'react'
import '../Asset/CSS/Dashboard.css'
import Account from '../Component/Account'
import Customer from '../Component/Customer'
import Transaction from '../Component/Transaction'
import CustomerService from '../Services/CustomerService'
export default class CustomerDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
             customerId:localStorage.getItem("customerId"),
             accountId:'',
             customer:{}
        }
    }
    componentDidMount(){
        CustomerService.viewCustomer(this.state.customerId).then((res)=>{
            localStorage.setItem("accountId",res.data.accountId.accountId)
            this.setState({customer:res.data})
        })
    }
   logout=()=>{
       localStorage.setItem("accountId",'')
       this.props.history.push("/")
   }
    render() { 
        return (
            <div className="limiter">
                <div className="container-login-100" style={{ backgroundImage: `url('/images/bg2.jpg')`,height:'610px'}}>
                    <div className="container-fluid">
                        
                        <div className="row">
                            <div className="col-sm-11">
                        <h1 className="mt-4 text-center" style={{color:"white",fontWeight:"bold",fontFamily:"cursive"}}>Welcome to Bank {this.state.customer.customerName}</h1>
                        </div>
                        <div className="col-sm-1 mt-4">
                            <button className="btn btn-outline-danger" onClick={this.logout}>Logout</button>
                        </div>
                            <div className="col-sm-3 mt-5">
                                <div className="card">
                                        <Customer />
                                </div>
                                <div className="card mt-3 mb-5">
                                    <Account />
                                </div>
                            </div>
                            <div className="col-sm-9 mt-5">
                                <div className="card">
                                    <Transaction />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
