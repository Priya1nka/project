import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sayGoodAfternoon, sayGoodEvening, sayGoodMorning } from "./wishmessage/wish-message-action";
import { messageKey, messageReducer } from "./wishmessage/wish-message.reducer";

let WishMessage_Redux =()=>{
    let dispatch=useDispatch();


    //fetch data from store
    let messageInfo=useSelector((state)=>{
         return state[messageKey]
    });

 /*    let clickGoodMorning=()=>{
           dispatch(sayGoodMorning());
    } */

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{messageInfo.message}</p>
                                <button onClick={()=>dispatch(sayGoodMorning())}
                                 className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={()=>dispatch(sayGoodAfternoon())}  className="btn btn-primary btn-sm">Good Afternoon</button>
                                <button onClick={()=>dispatch(sayGoodEvening())}  className="btn btn-warning btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default WishMessage_Redux;