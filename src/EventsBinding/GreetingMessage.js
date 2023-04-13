import React, { Fragment } from "react";

class GreetingMessage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            meassage:"Hello.."
        }
    }
     

    sayGoodMorning=()=>{
        this.setState({
            meassage:"Good Morning"
        })
    }
    sayGoodAfternoon=()=>{
        this.setState({
            meassage:"Good Afetrnoon"
        })
    }
    sayGoodEvening=()=>{
        this.setState({
            meassage:"Good Evening "
        })
    }
    

    render(){
        return(
            <Fragment>
                <div className="card m-4">
                    <div className="card-body">
                        <p className="h2">{this.state.meassage}</p>
                        <button  onClick={this.sayGoodMorning} className="btn btn-success">Good Morning</button>
                        <button  onClick={this.sayGoodAfternoon} className="btn btn-primary">Good Afternoon</button>
                        <button  onClick={this.sayGoodEvening} className="btn btn-danger">Good Evening</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default GreetingMessage;