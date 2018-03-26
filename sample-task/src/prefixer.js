
import React, { Component } from 'react';
import './prefixer.css';
import Select from 'react-select';
class Prefixer extends Component {
    constructor(props) {
        super(props);
        this.state = {value:"Two"};
      }
     updateState(element) {
           this.setState({value: element});
         }
     render(){
     var options = [
         { value: 'One', label: 'poland',code:"+48" },
         { value: 'Two', label: 'germany',code:"+85" },
         { value: 'Three', label: 'serbia',code:"+381" }
     ];
       return(
   <div >
       <h3>Country</h3>
         <Select className="menu-outer-top"
           name="form-field-name"
           value={this.state.value} 
           options={options}
           onChange={this.updateState.bind(this)}
         />
         <h3>Phone number</h3>
   <input value={this.state.value.code} className="code"></input><input></input>
         </div>
      );
     }
}

export default Prefixer;
