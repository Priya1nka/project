import React from "react";

class ChangeSelectBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            option:""
        }
    }

    updateOption=(event)=>{
        this.setState({
            option:event.target.value
        })
    }

   
    render(){
        return(
            <React.Fragment>
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
                           <select className="form-control" onChange={this.updateOption}>
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
                        <p className="h4">{this.state.option}</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </React.Fragment>
        )
    }



}

export default ChangeSelectBox;