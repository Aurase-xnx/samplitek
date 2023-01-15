import logo from './logo.svg';
import './/css/Header.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Samples from './Samples';
import Home from './Home';

export default function HeaderTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<index />}>
          <Route index element={<Home />} />
          <Route path="Sample" element={<Samples />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<HeaderTest />);