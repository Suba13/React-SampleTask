import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:{
      isButtonDisabled: false,val:"submit"}
    }
  }
  
  uploadFile() {
    this.setState({
      value:{isButtonDisabled: true,val:"submitting"}
    });
    setTimeout(() => {
      this.setState({
        value:{isButtonDisabled: false,val:"submit"}
      });
    }, 2500)
  }

     render(){
    
       return(
   <div className="button">
           <button type="button" className="btn btn-primary" onClick={() => this.uploadFile()} disabled={this.state.value.isButtonDisabled}>{this.state.value.val}</button>
         </div>
      );
     }
}

export default Button;