import React, { Fragment, useState } from "react";


let HobbySelectorCheck=()=>{
     
    let [hobby,setHobby]=useState({
          coding:false,
          cooking:false,
          sleeping:false

    })

    let updateInput =(e)=>{
        setHobby({
            ...hobby,
            [e.target.name] : e.target.checked
        })
    }

    return(
        <Fragment>
{/*         <pre>{JSON.stringify(hobby)}</pre> */}         
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
                                                onChange={updateInput}
                                                className="form-check-input" type="checkbox" id="defaultCheck1" />
                                                    <label className="form-check-label" for="defaultCheck1">
                                                        Coding
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input 
                                                 name="cooking"
                                                onChange={updateInput}                                    
                                                className="form-check-input" type="checkbox" id="defaultCheck2" />
                                                    <label className="form-check-label" for="defaultCheck2">
                                                        Cooking
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input 
                                                name="sleeping"
                                                onChange={updateInput}
                                                className="form-check-input" type="checkbox"       id="defaultCheck3" />
                                                    <label className="form-check-label" for="defaultCheck3">
                                                        Sleeping
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                        {
                                            hobby.coding ?
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
                                            hobby.cooking ? <React.Fragment>
                                            <div className="card animated jello">
                                            <div className="card-body bg-danger text-white">
                                                <p className="h3">Cooking</p>
                                                <p>I Love Cooking.</p>
                                            </div>
                                           </div>
                                            </React.Fragment>:null
                                        }
                                           
                                          {
                                             hobby.sleeping ? <React.Fragment>
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
export default HobbySelectorCheck;