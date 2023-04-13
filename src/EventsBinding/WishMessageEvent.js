import React, { Fragment } from "react";

class WishMessageEvent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message :"Hello"
        }
    }

    updateMeassage=()=>{
        this.setState({
            message:"Good Morning"
        })
    }

    sayGoodAfternoon=(value)=>{
        this.setState({
            message:value
        })
    }


    render(){
        return(
            <Fragment>
                <h2>{this.state.message}</h2>
                <button onClick={this.updateMeassage} className="btn btn-success btn-sm">Good Morning</button>
                <button onClick={this.sayGoodAfternoon.bind(this,"Good Afternnon")} className="btn btn-warning btn-sm">Good Afternnon</button>

            </Fragment>
        )   }
}

export default WishMessageEvent;