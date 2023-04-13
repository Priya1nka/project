import React, { Fragment, useState } from "react";


let Child_Card =(props)=>{

     let [childInput,setChildInput]=useState('');

     let updateInput=(e)=>{
        setChildInput(e.target.value)
        props.sendChildData(e.target.value)
     }



    return(
        <Fragment>
          <div className="container mt-3 mb-t">
            <div className="row">
                <div className="col">
                    <div className="card m-3">
                        <div className="card-body bg-danger text-white">
                            <p className="h3">Child Component</p>
                           
                            <form>
                                <div className="form-group">
                                   <input 
                                      value={childInput}
                                      onChange={updateInput}
                                    type="text" className="form-control" placeholder="Enter Name"/>
                                </div>
                            </form>
                            <p className="lead">From Parent: {props.meassage}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Fragment>
    )
}
export default Child_Card;