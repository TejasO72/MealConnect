/* eslint-disable no-unused-vars */
// App.jsx (FRONTEND FILE TO COMBINE EVERYTHING)
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootcomp from './components/Rootcomp.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Rootcomp/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;