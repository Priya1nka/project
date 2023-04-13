import React, { Fragment } from "react";

class GreetingMessageTwo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            meassage:"Hello.."
        }
    }
     

    updateMeassage=(value)=>{
        this.setState({
            meassage:value
        })
    }

    

    render(){
        return(
            <Fragment>
                <div className="card m-4">
                    <div className="card-body">
                        <p className="h2">{this.state.meassage}</p>
                        <button  onClick={this.updateMeassage.bind(this,"Good Morning")} className="btn btn-success">Good Morning</button>
                        <button  onClick={this.updateMeassage.bind(this,"Good Afternnon")} className="btn btn-primary">Good Afternoon</button>
                        <button  onClick={this.updateMeassage.bind(this,"Good Evening")} className="btn btn-danger">Good Evening</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default GreetingMessageTwo;