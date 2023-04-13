import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pizza from '../assets/images/pizza.jpeg';
import {buyPizza} from '../redux/pizzaActions';


let PizzaHut =()=>{
    let dispatch=useDispatch();
   

    let pizzaState=useSelector((state)=>{
        return state.pizza

    })

    let clickbuyPizza=()=>{
       dispatch(buyPizza());
    }

    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3 text-danger">PizzaHut</p>
                    <p className="lead">Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                 <img src={pizza} alt="Image not found" className="image-fluid image-thumbnail"/>
                </div>
                <div className="col-md-8">
                    <p className="h4">Available :
                    <span className="font-weight-bold text-danger">{pizzaState.count}</span>
                    </p>
                    <button onClick={clickbuyPizza} className="btn btn-secondary text-white btn-sm ">Buy Pizza</button>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default PizzaHut;