import React, { Fragment, useState } from "react";


let ChangeUserName_Hooks =()=>{
     
    let [username,setUsername]=useState('')

    let updateInput=(e)=>{
        setUsername(e.target.value)

    }

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h1>Change User Name</h1>
                            </div>
                            <div className="card-body">
                            <form>
                                <div className="form-group">
                                <input
                                 value={username}
                                 onChange={updateInput}
                                 type="text" className="form-control" placeholder="User Name" />
                                </div>
                                <p className="h3">{username}</p>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default ChangeUserName_Hooks;