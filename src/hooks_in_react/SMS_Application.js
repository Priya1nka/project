import React, { Fragment, useState } from "react";

let SMS_Application=()=>{
    let [count,setCount]=useState(0)
    return(
        <Fragment>
           <div className="container mt-3 mb-5">
                 <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">SMS Application</p>
                            </div>
                    
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                                <textarea 
                                onChange={(e)=>setCount(e.target.value.length)}
                                maxLength="100"
                                className="form-control" rows="4"  placeholder="Enter Your SMS Here" />
                            </div>
                          </form>
                        </div>
                        <div className="card-footer">
                              <p className="h3">Characters Remaining :
                              <span className="font-weight">{100-count}</span>
                              </p>
                        </div>
                        </div>
                    </div>
                 </div>
              </div>
        </Fragment>
    )
}
export default SMS_Application;