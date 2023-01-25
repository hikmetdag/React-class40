import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Error from "./Error";
import Header from "./Header"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
        setFilter(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };
    getProducts();
  }, []);

  const filterProducts = (cat) => {
    const productList = data.filter((element) => element.category === cat);
    setFilter(productList);
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) return <Error error={error} />;
  return (
    <>
      <h1>Products</h1>
      <Header />
      <Categories filterProducts={filterProducts} />
      <Product filter={filter} />
    </>
  );
};

export default Products;
