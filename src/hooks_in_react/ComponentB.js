import React, { Fragment } from "react";
import ComponentC from "./ComponentC";

let ComponentB =(props)=>{
    return(
        <Fragment>
           <div className="card m-3">
            <div className="card-body bg-secondary text-white">
                <p className="h3">Component B </p>
                <small>{JSON.stringify(props.userInfo)}</small>
                <ComponentC userInfo={props.userInfo}/>
            </div>
           </div>
        </Fragment>
    )
}
export default ComponentB;