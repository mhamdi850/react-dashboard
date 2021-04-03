import React from "react";
import Countries from "./Components/Countries";
import navBar from "./Components/Navigate/navBar";
import data from "./data.json";
import './index.css'


class App extends React.Component {
  constructor () {
    super()
    this.state= {
      countries: data.countries,
      year:"",
      sort:"",
    }
  }
  render () {
    return (
      <div className="container">
          <nav><navBar/></nav>
          <div id="content">
            Countries
            <Countries countries={this.state.countries}></Countries>
            </div>
          <div id="sidebar">Cart Items</div>
      </div>
    );
  }
 
}

export default App;
