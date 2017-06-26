import React, { Component } from 'react';
import TextField from '../components/TextField';

class OrderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instructions: '',
      size: '',
      toppings: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.instructionStateChanger = this.instructionStateChanger.bind(this);
    this.sizeStateChanger = this.sizeStateChanger.bind(this);
    this.toppingsStateChanger = this.toppingsStateChanger.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({ instructions: '', size: '', toppings: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      "instructions": this.state.instructions,
      "size": this.state.size,
      "toppings": this.state.toppings
    }
    this.props.handlePizzaOrder(formPayload);
    this.handleClearForm(event);
  }

  instructionStateChanger(event) {
    this.setState({ instructions: event.target.value })
  }

  sizeStateChanger(event) {
    this.setState({ size: event.target.value })
  }

  toppingsStateChanger(event) {
    this.setState({ toppings: event.target.value })
  }

  render() {
    return (
      <div className='callout secondary'>
        <h1>Pizza Order Form</h1>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            handler={this.sizeStateChanger}
            label='Select Size'
            name='size'
            value={this.state.size}
          />
          <TextField
            handler={this.toppingsStateChanger}
            label='Select Toppings'
            name='toppings'
            value={this.state.toppings}
          />
          <TextField
            handler={this.instructionStateChanger}
            label='Special Instructions'
            name='instructions'
            value={this.state.instructions}
          />
          <input className='button' type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default OrderForm
