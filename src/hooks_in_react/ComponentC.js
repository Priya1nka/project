import React, { Fragment } from "react";

let ComponentC =(props)=>{
    return(
        <Fragment>
           <div className="card m-3">
            <div className="card-body bg-warning text-white">
                <p className="h3">Component C </p>
                <small>{JSON.stringify(props.userInfo)}</small>
            </div>
           </div>
        </Fragment>
    )
}
export default ComponentC;