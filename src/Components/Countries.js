import React, { Component } from 'react'
import formatCurrency from './utils'

export default class Countries extends Component {
    render() {
        return (
            <div>
                <ul className="countries">
                    {this.props.countries.map((country)=>(
                        <li key={country._id}>
                            <div className="country">
                                <p>{country.title}</p>
                                <p>{country.year}</p>
                                <p>{formatCurrency(country.amount)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

