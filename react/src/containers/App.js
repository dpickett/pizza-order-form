import React, { Component } from 'react';
import OrderForm from './OrderForm';
import PizzasOrdered from '../components/PizzasOrdered'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pizzasOrdered: []
    }
    this.addPizzaToPage = this.addPizzaToPage.bind(this);
    this.postPizza = this.postPizza.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/pizzas')
    .then(response => response.json())
    .then(json => this.setState({ pizzasOrdered: json.pizzas }))
  }

  addPizzaToPage(pizza) {
    let newPizzasOrdered = this.state.pizzasOrdered.concat(pizza)
    this.setState({ pizzasOrdered: newPizzasOrdered })
  }

  postPizza(pizza) {
    fetch('/api/v1/pizzas', {
      method: 'POST',
      body: JSON.stringify(pizza)
    })
    .then(response => response.json())
    .then(pizza => this.addPizzaToPage(pizza))
  }

  render() {
    return(
      <div className='row'>
        <div className='small-12 medium-6 columns'>
          <OrderForm handlePizzaOrder={this.postPizza} />
        </div>
        <div className='small-12 medium-6 columns'>
          <PizzasOrdered pizzas={this.state.pizzasOrdered} />
        </div>
      </div>
    )
  }
}

export default App;
