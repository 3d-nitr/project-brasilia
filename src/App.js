import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/contact';
import SamplePage from './pages/SamplePage.js';
import Register from './pages/Register.js';
import HomePage from './pages/HomePage';
import React  from 'react';

function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/sp" element={<SamplePage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
