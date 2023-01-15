import logo from './logo.svg';
import './/css/Header.css';
import React from 'react';

export default function Header() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="navbar">
          <a href="./">Home</a>
          <a href="./Samples">Samples</a>
          <a href="./Login">Login</a>
        </div>
      </header>
    </div>
  )
}
