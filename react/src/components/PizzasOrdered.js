import React from 'react';
import Pizza from './Pizza';

const PizzasOrdered = props => {
  let pizzaElements = props.pizzas.map(pizza => {
    return(
      <Pizza key={pizza.id} pizza={pizza} />
    )
  })

  return(
    <div>
      <h1>Orders</h1>
      {pizzaElements}
    </div>
  )
}

export default PizzasOrdered;
