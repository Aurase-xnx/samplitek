import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Samples from './Samples';
import Signin from './Signin';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/Samples' element={<Samples/>} />
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
