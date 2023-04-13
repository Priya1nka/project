import React, { Fragment } from "react";
class RegistrationForm extends React.Component {

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

  updateInput=(event)=>{
    this.setState({
        user:{
            ...this.state.user,
            [event.target.name] : event.target.value
        }
    })
  }

  regiter=(event)=>{
    event.preventDefault();
    console.log(this.state.user)

  }

    render() {
        return (
            <Fragment>
            <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-warning text-white">
                                    <p className="h4">Registration Form</p>
                                </div>
                            <div className="card-body">
                                <form onSubmit={this.regiter}>
                                    <div className="form-group">
                                        <input 
                                        name="username"
                                        value={this.state.user.username}
                                        onChange={this.updateInput}
                                        type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                        name="address"
                                        value={this.state.user.address}
                                        onChange={this.updateInput}
                                         type="text" className="form-control" placeholder="Addresss" />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                          name="email"
                                        value={this.state.user.email}
                                        onChange={this.updateInput}
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

export default RegistrationForm;