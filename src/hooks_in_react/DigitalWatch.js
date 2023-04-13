import  React, { Fragment, useEffect, useState } from 'react';

let DigitalWatch=()=>{

   let [currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())

     useEffect(()=>{
        let timer=setInterval(()=>{
          setCurrentTime(new Date().toLocaleTimeString())
        },1000)

        return ()=>{
            clearInterval(timer)
        }
     })


    return(
        <Fragment>
        <div className='container m-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header bg-success text-white'>
                            <p className='h3'>Digital watch</p>
                        </div>
                        <div className='card-body'>
                           <h3 className='display-3'>{currentTime}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default DigitalWatch;