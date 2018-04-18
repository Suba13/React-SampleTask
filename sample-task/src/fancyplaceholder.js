import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/lib/text-field'

class FancyPlaceHolder extends Component {
    
         render(){
             return(
            <form>
      <div>
        <Field name="firstName" component={firstName => 
          <TextField hintText = "First Name" 
            floatingLabelText="First Name"
            errorText = {firstName.touched && firstName.error}
            {...firstName} 
          />
        }/>
      </div>
      </form>)
         }
}
export default FancyPlaceHolder;