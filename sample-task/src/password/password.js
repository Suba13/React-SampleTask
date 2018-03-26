import React, { Component } from 'react';

class Password extends Component {  
    render() {
        return (
            <span>
                <label htmlFor="password">Create Password</label><br/>               
                <input
                id="password" 
                type={this.props.type} 
                placeholder="Enter password...."               
                onChange={this.props.onChange} 
                /> 
            </span>   
        )
    }
}
export default Password;