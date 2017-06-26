import React from 'react';

const Pizza = props => {
  return(
    <div className="card">
      <div className="card-divider">
        <h4>#{props.pizza.id}. {props.pizza.size}</h4>
      </div>
      <div className="card-section">
        <p>
          <strong>Toppings: </strong>
          {props.pizza.toppings}
        </p>
      </div>
      <div className="card-section">
        <p>
          <strong>Special Instructions: </strong>
          {props.pizza.instructions}
        </p>
      </div>
    </div>
  )
}

export default Pizza;
