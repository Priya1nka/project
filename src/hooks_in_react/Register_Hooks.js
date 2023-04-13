import React, { Fragment, useState } from "react";

let Register_Hooks=()=>{
    
    let [user,setUser]=useState({
        register:{
            username:'',
            address:'',
            email:'',
            terms:false

        }
    })


    let updateInput=(e)=>{
        setUser({
            register:{
                ...user.register,
                [e.target.name]:e.target.value

            }
        })
    }

    let updateCheck=(e)=>{
        setUser({
            register:{
                ...user.register,
                [e.target.name]:e.target.checked

            }
        })
    }

    let register =(e)=>{
        e.preventDefault();
        console.log(user.register);
    }
 
    return(
        <Fragment>
               <div className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Registration Form</p>
                                </div>
                            <div className="card-body">
                                <form onSubmit={register}>
                                    <div className="form-group">
                                        <input 
                                        name="username"
                                        value={user.register.username}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                        name="address"
                                        value={user.register.address}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Addresss" />
                                    </div>
                                   
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        value={user.register.email}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-check">
                                        <input 
                                        name="terms" 
                                        onChange={updateCheck} className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">Accept Terms & Condition</label>
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
export default Register_Hooks;