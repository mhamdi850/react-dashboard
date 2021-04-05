import React from "react";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
import navBar from "./Components/Navigate/navBar";
import data from "./data.json";
import './index.css'


class App extends React.Component {
  constructor () {
    super()
    this.state= {
      countries: data.countries,
      n:"",
      sort:"",
    }
  }
  sortCountries = (e) => {

    const sort=e.target.value
    this.setState((state) => ({
      sort:sort, 
      countries: this.state.countries.slice().sort((a,b)=>
        sort === "lowest"
        ? a.amount > b.amount
          ? 1
          :-1
        : sort === "highest"
        ? a.alount < b.amount
          ? 1
          : -1
        : a._id > b._id
          ? 1
          : -1        
      ),
    }))
  }

  filterCountries = (e) => {
    if(e.target.value === ""){
      this.setState({n:e.target.value, countries:data.countries})
    } else{
      this.setState({
        n: e.target.value,
        countries: data.countries.filter(
          (country) => country.availibleYears.indexOf(e.target.value)>=0
        ),
      })
    }
  }



  render () {
    return (
      <div className="container">
          <nav><navBar/></nav>
          <div id="content">
            <Filter
              count = {this.state.countries.length}
              year={this.state.n}
              sort={this.state.sort}
              filterCountries={this.filterCountries}
              sortCountries={this.sortCountries}
            ></Filter>

            <Countries 
              countries={this.state.countries}>
            </Countries>
            </div>
          <div id="sidebar">Cart Items</div>
      </div>
    );
  }
 
}

export default App;
