import React, { Component } from 'react'
import formatCurrency from './utils'

export default class Countries extends Component {
    render() {
        return (
            <div>
                <ul className="countries">
                    {this.props.countries.map(country =>(
                        <li key={country._id}>
                            <br/>
                            {country.title}
                            <br/>
                            {country.year}
                            <br/>
                            {country.phase}
                            <br/>
                            {formatCurrency (country.amount)}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
