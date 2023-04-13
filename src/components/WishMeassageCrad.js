import React, { Fragment } from "react";

class WishMeassageCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
            <div className="card m-3">
            <div className="card-body bg-success text-white">
                <p className="h3">{this.props.msg}</p>
            </div>
           </div>
            </Fragment>
        )
    }
}

export default WishMeassageCard;