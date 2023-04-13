import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{

    constructor(props){
        super(props)

        this.state={
            meassage : "I am from Parent",
            text:""
        }

    }


    pullData =(data)=>{
        this.setState({
            text: data
        })
    }

    render(){
        return(
            <>
              <div className="card mt-3">
                <div className="card-body">
                    <p className="h3"> From Parent :</p>
                    <p> From Child:{this.state.text}</p>
                    <ChildComponent  meassage={this.state.meassage}  pushData={this.pullData}/>
                </div>
              </div>
            </>
        )
    }
}

export default ParentComponent;