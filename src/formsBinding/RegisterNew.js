import React, { Fragment } from "react";
class RegisterNew extends React.Component {

    constructor(props) {
        super(props)
       


        this.state={
            user :{
                username:"",
                address:"",
                email:""
            }
        
        }   

    }

  regiter=(event)=>{
    event.preventDefault();
    console.log(this.state.user)

  }

    render() {
       
        let {username,address,email}=this.state.user;

        return (
            <Fragment>
        
           {/*  <pre>{JSON.stringify(this.state)}</pre> */}
                <div className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Registration Form</p>
                                </div>
                            <div className="card-body">
                                <form onSubmit={this.regiter}>
                                    <div className="form-group">
                                        <input 
                                        value={username}
                                        onChange={(e)=>{this.setState({user:{...this.state.user,'username': e.target.value}})}} 
                                         type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                        value={address}
                                        onChange={(e)=>{this.setState({user:{...this.state.user,'address': e.target.value}})}} 
                                         type="text" className="form-control" placeholder="Addresss" />
                                    </div>
                                   
                                    <div className="form-group">
                                        <input 
                                        value={email}
                                        onChange={(e)=>{this.setState({user:{...this.state.user,'email': e.target.value}})}} 
                                        type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="login" className="btn btn-success btn-sm" />
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RegisterNew;