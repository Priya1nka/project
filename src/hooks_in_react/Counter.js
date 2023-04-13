import React,{useState} from "react";

let Counter =()=>{

    const [counter,SetCounter]=useState(0);



    let incrCounter=()=>{
      SetCounter(counter+1);
    }


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                            <h1>Counter:{counter}</h1>
                            <button onClick={incrCounter} className="btn btn-success btn-sm">Click</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Counter;