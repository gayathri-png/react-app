import React from 'react'
import HOC from './HOC'

function Nav() {
  return (
    <div>
      <a to="/home">Home</a>
      <a to="/about">About</a>
      <a to="/login">Form</a>
     
    </div>
  )
}

export default HOC(Nav)