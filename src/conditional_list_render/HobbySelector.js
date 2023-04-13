import React, { Fragment } from "react";

class HobbySelector extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            coding:false,
            cooking:false,
            sleeping:false
        }
    }

    updateInput=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name] :e.target.checked
        })

    }

    render() {
        return (
            <Fragment>
            <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3 mb-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h3">Hobby Selector</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-check">
                                                <input 
                                                name="coding"
                                                onChange={this.updateInput}
                                                className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label" for="defaultCheck1">
                                                        Coding
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input 
                                                 name="cooking"
                                                onChange={this.updateInput}
                                                className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                    <label className="form-check-label" for="defaultCheck2">
                                                        Cooking
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input 
                                                name="sleeping"
                                                onChange={this.updateInput}
                                                className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                                    <label className="form-check-label" for="defaultCheck3">
                                                        Sleeping
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                        {
                                            this.state.coding ?
                                            <React.Fragment>
                                            <div className="card animated jello">
                                            <div className="card-body bg-success text-white">
                                                <p className="h3">Coding</p>
                                                <p>I Love Coding.</p>
                                            </div>
                                           </div>
                                            </React.Fragment>:null
                                        }
                                           
                                        {
                                            this.state.cooking ? <React.Fragment>
                                            <div className="card animated jello">
                                            <div className="card-body bg-danger text-white">
                                                <p className="h3">Cooking</p>
                                                <p>I Love Cooking.</p>
                                            </div>
                                           </div>
                                            </React.Fragment>:null
                                        }
                                           
                                          {
                                            this.state.sleeping ? <React.Fragment>
                                            <div className="card animated jello">
                                            <div className="card-body bg-primary text-white">
                                                <p className="h3">Sleeping</p>
                                                <p>Good Night Sweet Dream Take Care</p>
                                            </div>
                                           </div>
                                        
                                            </React.Fragment>:null
                                          }
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }

}

export default HobbySelector;