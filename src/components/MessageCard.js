import React from "react";
import './MessageCard.css';


class MessageCard extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                <div  className="card-body">
                 <h3>Good Morning</h3>
                 <p className="card-text">Wishing a good morning blessed with happiness to my lovely friend.
                  May every single morning of your life is showered with great zeal and high energies.</p>
                </div>
                </div>
            </div>
        )
    }
}
export default MessageCard;