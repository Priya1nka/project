import React, { Fragment } from "react";

class ShowPassword extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            inputType:'password'
        }
    }


    updateCheck=(event)=>{
         /*  if(this.state.inputType=== 'password'){
            this.setState({
                inputType:'text'
            });
          }
          else{
            this.setState({
                inputType:'password'
            });
          } */
           
          (this.state.inputType=== 'password') ? this.setState({
            inputType:'text'
          }):this.setState({
            inputType:'password'
        });


    }


    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header  bg-danger text-white" >
                                    <p className="h4" >Show Password</p>
                                </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input onChange={this.updateCheck} type="checkbox" value="" aria-label="Checkbox for following text input" />
                                        </div>
                                        </div>
                                        <input type={this.state.inputType} className="form-control" aria-label="Text input with checkbox" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ShowPassword;