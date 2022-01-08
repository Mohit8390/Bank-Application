import React, { Component } from 'react'
import '../Asset/CSS/Login.css'
import Dlogo from '../Asset/Images/discoverlogo.png'
import CustomerService from '../Services/CustomerService'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
             email:'',
             password:'',
             customerId:'',
             emailError:'',
             passwordError:''
        }
    }
    validate=()=>{
        let emailError='';
        let passwordError='';
        if(!this.state.email){
            emailError="Please enter the Email-Id";
        }
        
        if(this.state.password==""){
            passwordError="Please enter password";
        }
        if(emailError ||  passwordError ){
            this.setState({
                emailError,passwordError
            })
            return false;
        }
        return true;

    }
    emailHandler=(e)=>{
        this.setState({email:e.target.value,emailError:''})
    }
    passwordHandler=(e)=>{
        this.setState({password:e.target.value,passwordError:''})
    }
    login=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        CustomerService.login(this.state.email,this.state.password).then((res)=>{
            alert("Login Succesfull")
            this.setState({customerId:res.data.customerId})
            localStorage.setItem("accountId",res.data.accountId.accountId)
            localStorage.setItem("customerId",this.state.customerId)
            this.props.history.push("/dashboard")
        }).catch(error=>alert("Invalid Credentials"))
    }
    
    }
    render() {
        return (
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: `url('/images/bg2.jpg')` }}>
                <center>
                    {/* <img src={Dlogo} style={{width:"20rem",height:"4rem"}}></img> */}
                    <h1 style={{color:"white",fontWeight:"bold",fontSize:"3rem"}}>Discover</h1>
                <div className="container-fluid mt-5" style={{alignItems:"center"}}>
                    <div className="card" style={{ borderRadius: "2%", border: "2", width: "35rem", borderColor: "black",backgroundColor:"black"}}>
                        <form>
                            <div className="text-center">
                                <h2 className="mt-4 mb-4" style={{color:"white"}}>LOGIN</h2>
                            </div>
                            <div class="mb-3 text-center">
                                <label for="exampleInputEmail1" className="form-label" style={{color:"white"}}>Email address</label>
                                <input type="email" className="form-control" style={{width:"80%",marginLeft:"3rem"}} onChange={this.emailHandler} />
                                <div style={{fontSize:"2",color:"red"}}>{this.state.emailError}</div>
                            </div>
                            <div className="mb-3 text-center">
                                <label for="exampleInputPassword1" className="form-label" style={{color:"white"}}>Password</label>
                                <input type="password" className="form-control" style={{width:"80%",marginLeft:'3rem'}} id="exampleInputPassword1" onChange={this.passwordHandler}/>
                                <div style={{fontSize:"2",color:"red"}}>{this.state.passwordError}</div>
                            </div>
                            <div className="text-center mt-4 mb-5">
                            <button type="submit" className="btn btn-outline-danger" onClick={this.login}>Login</button>
                            </div>
                        </form>

                    </div>
                </div>
                </center>
                </div>
            </div>
        )
    }
}
