import React, { Fragment } from "react";

class StudentCard extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            name:"priyanka Gadekar",
            Education:"BSC Computer Science",
            age:23,
            hobbies:["Watching TV","Cooking"]
        }
    }
      
    render(){
         return(
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
            </Fragment>
         )
    }
}
export default StudentCard;