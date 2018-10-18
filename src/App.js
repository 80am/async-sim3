import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from  './Components/Auth'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App1">
       
        <div className="smallbox">
       {routes}
        
       </div>

      </div>
    );
  }
}

export default App;
