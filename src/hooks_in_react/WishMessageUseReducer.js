import React, { useReducer } from "react";

  let initialState ={
    meassage: 'Hello'
  }

  let reducer =(state = initialState,action)=>{

    switch(action){
        case 'gm' : return{
            meassage:'Good Morning'
        };
        case 'gf' : return{
            meassage:'Good Afternoon'
        };
        case 'ge' : return{
            meassage:'Good Evening'
        };
        default : return state;
    }

  }

let WishMeassageuseReducer =()=>{

    let [state,dispatch] = useReducer(reducer,initialState);
        
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h3">useReducer() Hooks</p>
                            </div>
                            <div className="card-body">
                            <p className="h3">{state.meassage}</p>
                              <button onClick={()=>dispatch('gm')} className="btn btn-primary btn-sm">Good Morning</button>  
                              <button onClick={()=>dispatch('gf')} className="btn btn-warning btn-sm">Good Afternoon</button>  
                              <button onClick={()=>dispatch('ge')} className="btn btn-danger btn-sm">Good Evening</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default WishMeassageuseReducer;