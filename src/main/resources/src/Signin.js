import React from 'react'

export default function Signin() {
  return (
    <div>
      <div className="logSigSec">
        <p>Signin Here</p>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        <button>Sign in</button>
      </div>
      <a href="./Login">Do you already have an account ?</a>
    </div>
  )
}
