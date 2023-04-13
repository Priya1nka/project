import React, { Fragment, useState } from "react";

let Auth_User =()=>{

     let [auth,setAuth]=useState({
        meassage:'',
        isLoggedIn: false
     })

     let login=()=>{
        setAuth({
            meassage:'Welcome! User',
            isLoggedIn : true
        })
     }

     
     let logout=()=>{
        setAuth({
            meassage:' Thank You! User',
            isLoggedIn : false
        })
     }

    return(
        <Fragment>
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            {
                                !auth.isLoggedIn &&
                                <button onClick={login} className="btn btn-success">Login</button>
                            }
                            {
                                auth.isLoggedIn &&
                                <button onClick={logout} className="btn btn-danger">Logout</button>
                            }
                                <p className="h3">{auth.meassage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Auth_User;
