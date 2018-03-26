import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import FilterList from "./filterlist"
import Prefixer from "./prefixer";
import Button from "./button"
import Password from "./password/passwordstrength"

class App extends Component {
  
  render() {
    return (
      <div>
         <Switch>
         <Route
           exact path="/"
            component={FilterList}
          />
           <Route
           exact path="/button"
            component={Button}
          />
           <Route
           exact path="/password"
            component={Password}
          />
           <Route
           exact path="/prefix"
            component={Prefixer}
          />
        
        </Switch>
       
      </div>
    );
  }
}

export default App;
