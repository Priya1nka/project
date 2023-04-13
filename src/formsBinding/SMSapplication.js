import React, { Fragment } from "react";

class SMSapplication extends React.Component{
    constructor(props){
        super(props)

        this.state={
            maxLimit:100,
            count:100
        }
    }

    updateCount=(event)=>{
        this.setState({
            count:this.state.maxLimit - event.target.value.length
        })

    }


    render(){
        return(
            <Fragment>
              <div className="container mt-3 mb-5">
                 <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">SMS Application</p>
                            </div>
                    
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                                <textarea className="form-control" rows="4"  placeholder="Enter Your SMS Here" onChange={this.updateCount}  maxLength={this.state.maxLimit}/>
                            </div>
                          </form>
                        </div>
                        <div className="card-footer">
                              <p className="h3">Characters Remaining :
                              <span className="font-weight">{this.state.count}</span>
                              </p>
                        </div>
                        </div>
                    </div>
                 </div>
              </div>
            </Fragment>
        )
    }
}
export default SMSapplication;

