import React from 'react'

export default function Signin() {
  return (
    <div>
      <div className="logSigSec">
        <h2>Signup Here</h2>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        <button>Sign up</button>
      </div>
      <a className="linkLogSig" href="./Login">Do you already have an account ?</a>
    </div>
  )
}
