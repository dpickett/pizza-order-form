import React, { Component } from 'react';
import RadioButton from '../components/RadioButton';
import TextField from '../components/TextField';

class OrderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instructions: '',
      selectedSize: null,
      toppings: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.instructionStateChanger = this.instructionStateChanger.bind(this);
    this.sizeStateChanger = this.sizeStateChanger.bind(this);
    this.toppingsStateChanger = this.toppingsStateChanger.bind(this);
    this.validateTextEntry = this.validateTextEntry.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({ instructions: '', selectedSize: null, toppings: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateTextEntry(this.state.toppings) && this.validateTextEntry(this.state.instructions)) {
      let formPayload = {
        instructions: this.state.instructions,
        size: this.state.selectedSize,
        toppings: this.state.toppings
      }
      this.props.handlePizzaOrder(formPayload);
      this.handleClearForm(event);
    } else {
      console.log('NO.')
    }
  }

  instructionStateChanger(event) {
    this.setState({ instructions: event.target.value })
  }

  sizeStateChanger(event) {
    this.setState({ selectedSize: event.target.value })
  }

  toppingsStateChanger(event) {
    this.setState({ toppings: event.target.value })
  }

  validateTextEntry(input) {
    return (input != '' && input != null)
  }

  render() {
    let sizes = ['Small', 'Medium', 'Large']
    let sizeRadioButtons = sizes.map(size => {
      return(
        <RadioButton key={size} name={size} label={size} value={size} handler={this.sizeStateChanger} selectedSize={this.state.selectedSize}/>
      )
    })


    return (
      <div className='callout secondary'>
        <h1>Pizza Order Form</h1>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Select Size</legend>
            {sizeRadioButtons}
          </fieldset>
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
