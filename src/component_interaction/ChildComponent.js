import React from "react";

class ChildComponent extends React.Component{

    constructor(props){
        super(props)

        this.state={
            data:"Good Morning from Child"
        }

    }

    clickButton=()=>{
        this.props.pushData(this.state.data);
    }

    render(){
        return(
            <>
                 <div className="card mt-3">
                    <div className="crad-body">
                        <p className="h4">Child Component</p>
                        <p className="h3">From Parent:{this.props.meassage}</p>
                        <button onClick={this.clickButton} className="btn btn-success">Send</button>
                    </div>
                 </div>
            </>
        )
    }
}

export default ChildComponent;