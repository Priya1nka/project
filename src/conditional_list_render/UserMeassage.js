import React, { Fragment } from "react";

class UserMeassage extends React.Component{
    constructor(prpos){
        super(prpos)

        this.state={
            meassage:"",
            isLoggedIn:false
        }
    }

    login=()=>{
        this.setState({
            ...this.state,
            isLoggedIn : true,
            meassage:"Welcome User"
        })
    }

    logout=()=>{
        this.setState({
            ...this.state,
            isLoggedIn : false,
            meassage: "Thank you User"
        })
    }

    render(){
        return(
            <Fragment>
            <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3 mb-4">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                {
                                    !this.state.isLoggedIn  &&
                                    <button onClick={this.login} className="btn btn-primary btn-sm" >Login</button>
                                }
                                {
                                    this.state.isLoggedIn &&
                                    <button onClick={this.logout} className="btn btn-danger btn-sm" >Logout</button>

                                }
                                   <p className="h3">{this.state.meassage}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

        }
 }

 export default UserMeassage;
