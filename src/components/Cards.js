import React, { Fragment } from "react";
import img1 from '../assets/images/62.jpeg';
import img2 from '../assets/images/64.jpeg';
import img3 from '../assets/images/65.jpeg';
import img4 from '../assets/images/71.jpeg';

class Cards extends React.Component{
    render(){
        return(
          <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                        <img src={img1}/>
                            <div className="card-body">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </Fragment>
        )
    }
}