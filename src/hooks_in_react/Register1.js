import React, { Fragment, useRef } from "react";
import na from '../assets/images/na.jpeg'

let Register1=()=>{
    let imageEl=useRef(null)

    let clickButton=()=>{
        console.log(imageEl.current);
    }

    return(
        <Fragment>
          <img  ref={imageEl} src={na} alt="image is not display" height="200" width="200"/>
          <button onClick={clickButton} className="btn btn-success btn-sm"> Click</button>
        </Fragment>
    )

}
export default Register1;
