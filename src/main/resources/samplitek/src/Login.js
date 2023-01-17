import React from 'react'
import './/css/Login_Signin.css'

export default function Login() {
  return (
    <div>
      <div className="logSigSec">
        <h2>Login Here</h2>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log in</button>
      </div>
      <a className="linkLogSig" href="./Signin">You don't have an account yet ?</a>
    </div>
  )
}
