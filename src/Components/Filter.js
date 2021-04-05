import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return(
        <div className="filter">
            <div className="filter-result">{this.props.count} Countries</div>
            <div className="filter-sort"> 
                Order {" "}
                <select 
                    value={this.props.sort} 
                    onChange={this.props.sortCountries}
                >   
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-year"> 
                Filter {" "}
                <select 
                    value={this.props.n} 
                    onChange={this.props.filterCountries}
                >
                    <option value="">ALL</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
            </div>

        </div>
        ) 
        
    }
}
