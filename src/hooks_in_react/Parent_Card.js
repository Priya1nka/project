import React, { Fragment, useState } from "react";
import Child_Card from "./Child_Card";


let Parent_Card =()=>{

      let [parentInput,SetParentInput]=useState('');
      let [childData,setChildData]=useState('');

      let recieveData=(value)=>{
         setChildData(value)
 
      }

    return(
        <Fragment>
          <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col">
                    <div className="card m-3">
                        <div className="card-body bg-primary text-white">
                            <p className="h3">Parent Component</p>
                            <p className="lead">Child Data:{childData}</p>
                            <form>
                                <div className="form-group">
                                    <input 
                                    value={parentInput}
                                    onChange={(e)=>SetParentInput(e.target.value)}
                                    type="text" className="form-control" placeholder="Enter Name"/>
                                </div>
                            </form>
                             <Child_Card meassage={parentInput}  sendChildData={recieveData}/>
                        </div> 
                    </div>
                </div>
            </div>
          </div>
        </Fragment>
    )
}
export default Parent_Card;