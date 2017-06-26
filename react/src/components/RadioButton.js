import React from 'react';

const RadioButton = props => {
  let selectedBoolean = (props.value === props.selectedSize)

  return(
    <div>
      <input
        onChange={props.handler}
        type="radio"
        name={props.name}
        value={props.value}
        id={props.name}
        checked={selectedBoolean}
      />
      <label htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  )
}

export default RadioButton
