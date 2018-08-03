import React, {Component} from "react";

class UserOutput extends Component{
    
    render(){
        return (
            <div>
                <p>Username: {this.props.userName}</p>
            </div>
        );
    }
}

export default UserOutput;