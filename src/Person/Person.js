import React from 'react';

import cssPerson from './Person.module.css';

const person = (props) => {
  return (
    <div className={cssPerson.Person}>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
      <p>{ props.children }</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
