import React from 'react'
import PropTypes from 'prop-types'

import "../plans.css"

function PlanCard(props) {
  return (
    <div>
        <div className="price-card">
            <div className="title">
                <h2>{props.title}</h2>
                <h2>{props.price}₹</h2>
            </div>
            <div className="benefits">
                <h3>Features</h3>
                <ul>
                    {props.benefits.map((benefit, index) => {
                        return <li key={index}>{benefit}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

PlanCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    benefits: PropTypes.array
}

export default PlanCard
