import React, { Component } from 'react';
import DemoForm from './Demoform';
import { Route, Switch,Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div >
         <Switch>
         <Route path="/demoform" component={DemoForm} />
         <Link to="/demoform"> <button>Add</button>
        <button>Edit</button></Link>
        </Switch>
       
      </div>
      
    );
  }
}

export default withRouter(App);
