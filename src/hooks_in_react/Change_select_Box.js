import React, { Fragment, useState } from "react";

let Change_select_Box=()=>{
    let [option,setOption] =useState('')
    return(
        <Fragment>
           <div className="container mt-3">
                <div className="row">
                <div className="col-md-6">
                <div className="card">
                <div className="card-header bg-primary text-white">
                <p className="h4"> Change Select Box</p>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col">
                     <form>
                        <div className="form-group">
                           <select onChange={(e)=>setOption(e.target.value)} className="form-control">
                              <option value="">select an option</option>
                              <option value="React Js">React Js</option>
                              <option value="Java">Java</option>
                              <option value="Angular">Angular</option>
                              <option value="Python">Python</option>
                              <option value="Javascript">Javascript</option>
                           </select>
                        </div>
                     </form>
                    </div>
                    <div className="col">
                        <p className="h4">{option}</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </Fragment>
    )

}
export default Change_select_Box;