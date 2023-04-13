import React from "react";


class ChangeUserName extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:""
        }
    }

     updateUserName=(event)=>{
          this.setState({
            username:event.target.value
          })
     }

    render(){
        return(
            <div>
                <form>
                    <input value={this.state.username}  onChange={this.updateUserName}
                    type="text" placeholder="username"/>
                </form>
                <h2>{this.state.username}</h2>
            </div>
        )
    }
}
export default ChangeUserName;