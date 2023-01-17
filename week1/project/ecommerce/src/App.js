import React, { useState } from 'react';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';
import './App.css';
import Product from './components/product';
import Categories from './components/categories';

function App() {

  const [allProducts, setProducts] = useState(products);
  const [selectCategory, setSelectCategory] = useState();

  const handleFiltre = category => {
    const filterProducts = products.filter(item => `FAKE: ${item.category}` === category);
    setProducts(filterProducts);
  };
  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categories={categories} handleFiltre={handleFiltre} selectCat={selectCategory} setSelect={setSelectCategory} />
      <Product
        prop={allProducts} />;
    </div>
  );
}

export default App;
