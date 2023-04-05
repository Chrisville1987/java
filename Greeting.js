import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <p>Hello{props.name}</p>
      <p>I am {props.age} years old</p>
      <img Src={props.url} alt={props.altText} width={props.size}/>
      </div>
  )
}

export default Greeting