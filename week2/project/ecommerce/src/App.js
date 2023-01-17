import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import ProductDetail from './Components/productDetail';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;