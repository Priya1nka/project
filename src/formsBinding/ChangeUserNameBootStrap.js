import React from "react";

class ChangeUserNameBootStrap extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:""
        }
    }


    updateUserName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <h4>Change Username</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input value={this.state.username}
                                            onChange={this.updateUserName}
                                            type="text" className="form-control" placeholder="User Name"/>
                                        </div>
                                    </form>
                                    <p className="h3">{this.state.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default ChangeUserNameBootStrap;