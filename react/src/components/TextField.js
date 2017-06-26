import React from 'react';

const TextField = props => {
  return(
    <label htmlFor={props.name}>
      {props.label}
      <input
        id={props.name}
        name={props.name}
        onChange={props.handler}
        type="text"
        value={props.value}
      />
    </label>
  )
}

export default TextField;
