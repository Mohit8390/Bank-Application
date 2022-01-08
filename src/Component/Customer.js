import React, { Component } from 'react'
import prof from '../Asset/Images/customer.png'
import CustomerService from '../Services/CustomerService'
export default class Customer extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             customerId:localStorage.getItem("customerId"),
             customer:{}
        }
    }
    componentDidMount(){
        CustomerService.viewCustomer(this.state.customerId).then((res)=>{
            this.setState({customer:res.data})
        })
    }
    render() {
        return (
            <div style={{backgroundColor:"black"}}>
                <div className="row">
                    <div className="col-sm-12">
                    <h5 className="text-center mt-2 mb-2" style={{color:"white",fontWeight:"bold"}}>Customer Info</h5>
                    </div>
                    <div className="col-sm-12 text-center">
                    <img src={prof} style={{width:"4rem",height:'6rem'}}></img>
                    </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Customer Name : {this.state.customer.customerName}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Email-Id : {this.state.customer.emailId}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Gender : {this.state.customer.gender}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                         <h6 style={{color:"white",fontSize:'11px'}}>Age : {this.state.customer.age}</h6>
                        </div>
                        <div className="col-sm-12 text-center">
                        <h6 style={{color:"white",fontSize:'11px'}}>Mobile No. : {this.state.customer.phoneNo}</h6>
                        </div>
            </div>
            </div>
        )
    }
}
