import React, { Fragment, useState } from "react";

let Login_Form=()=>{

    let [user,setUser]=useState({
        username:'',
        password:''
    })

    let updateInput=(e)=>{
        setUser({
         ...user,
         [e.target.name]:e.target.value
        })
    }

     let login=(e)=>{
        e.preventDefault();
        console.log(user);
     }

    return(
        <Fragment>
         <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                            <h1>Login Form</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <input 
                                    name="username"
                                    value={user.username}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Enter username"/>
                                </div>
                                <div className="form-group">
                                    <input 
                                    name= "password"
                                    value={user.password}
                                    onChange={updateInput}
                                    type="password" className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="form-group">
                                <input type="submit" value="login" className="btn btn-success btn-sm"/>
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

export default Login_Form;