import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'

export default class Account extends Component {
constructor(props) {
    super(props)
    this.state = {
         customerId:localStorage.getItem('customerId'),
         accountId:'',
         customer:{
             accountId:{
                 dateOfOpening:[]
             }
         }
    }
}
componentDidMount(){
CustomerService.viewCustomer(this.state.customerId).then((res)=>{
    this.setState({customer:res.data})
    this.setState({accountId:res.data.accountId.accountId})
    localStorage.setItem("accountId",this.state.accountId)
})
}
    render() {
        return (
                <div style={{backgroundColor:"black"}}>
                <div className="row">
                    <div className="col-sm-12">
                    <h5 className="text-center mt-2 mb-2" style={{color:"white",fontWeight:"bold"}}>Account Info </h5>
                    </div>
                    <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Account Id : {this.state.customer.accountId.accountId}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Balance : {this.state.customer.accountId.balance}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Rate of Interest : {this.state.customer.accountId.interestRate}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Date Of Opening : {this.state.customer.accountId.dateOfOpening[0]}-{this.state.customer.accountId.dateOfOpening[1]}-{this.state.customer.accountId.dateOfOpening[2]}</h6>
                        </div>
            </div>
            </div>
        )
    }
}
