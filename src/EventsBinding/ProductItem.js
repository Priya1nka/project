import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinusCircle,faPlusCircle} from '@fortawesome/free-solid-svg-icons';


import React, { Fragment } from "react";


class ProductItem extends React.Component{
    constructor(props){
        super(props)
     
        this.state={
           product:{
            SNO:101,
            image:"https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$",
            name:"Samsang Watch",
            qty:2,
            price:500,
            total:1000  
           }
        }
    }

    IncrQty=()=>{
        this.setState({
            product:{
                ...this.state.product,
                qty:this.state.product.qty + 1
            }
        })
    }

    decrQty=()=>{
        this.setState({
            product:{
                ...this.state.product,
                qty:(this.state.product.qty - 1 > 0) ?this.state.product.qty -1 :1
            }
        })
    }

    render(){
        return(
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-light table-striped text-center">
                                <thead className="bg-primary text-white">
                                    <tr>
                                       <th>SNO</th>
                                       <th>Image</th>
                                       <th>Product Name</th>
                                       <th>Product Quantity</th>
                                       <th>Product Price</th>
                                       <th>Product Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product.SNO}</td>
                                        <td>
                                            <img src={this.state.product.image} width="80" height="80"/>
                                        </td>
                                        <td>{this.state.product.name}</td>
                                        <td>
                                        <FontAwesomeIcon onClick={this.decrQty} icon={faMinusCircle} className="mr-2"/>
                                         {this.state.product.qty}
                                        <FontAwesomeIcon onClick={this.IncrQty} icon={faPlusCircle} className="ml-2"/>
                                        </td>
                                        <td>{this.state.product.price}</td>
                                        <td>{this.state.product.price  * this.state.product.qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductItem;