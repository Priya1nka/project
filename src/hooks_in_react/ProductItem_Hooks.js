import React, { Fragment, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinusCircle,faPlusCircle} from '@fortawesome/free-solid-svg-icons';

let ProductItem_Hooks = () =>{
       
        let[product,setProduct]=useState({
                SNO:101,
                image:"https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$",
                name:"Samsang Watch",
                qty:2,
                price:500,
                total:1000  
        })

         let incrQuantity=()=>{
            setProduct({
                ...product,
                qty:product.qty+1
            })
         }

         let decrQuantity=()=>{
            setProduct({
                ...product,
                qty:product.qty-1 >0 ?product.qty-1:1
            })
         }


        return(
        <Fragment>
      {/*   <pre>{JSON.stringify(product)}</pre> */}
           <div  className="container mt-3">
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
                                        <td>{product.SNO}</td>
                                        <td>
                                             <img src={product.image} width="80" height="80" alt=""/> 
                                        </td>
                                        <td>{product.name}</td>
                                        <td>
                                        <FontAwesomeIcon onClick={decrQuantity}  icon={faMinusCircle} className="mr-2"/>
                                         {product.qty}
                                        <FontAwesomeIcon onClick={incrQuantity}  icon={faPlusCircle} className="ml-2"/>
                                        </td>
                                        <td>{product.price}</td>
                                        <td>{product.price  * product.qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                </div>
            </div>
           </div>
        </Fragment>
    )
}

export default ProductItem_Hooks;