import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Error from "./Error";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
        setFilter(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getProducts();
  }, []);

  const filterProducts = (cat) => {
    const productList = data.filter((element) => element.category === cat);
    setFilter(productList);
  };
  const clearErrorState = () => {
    setError("");
  };
  if (loading) return <h2>Loading...</h2>;
  if (error) return <Error />;
  else
    return (
      <>
        {clearErrorState}
        <h1>Products</h1>
        <Categories filterProducts={filterProducts} />
        <Product filter={filter} />
      </>
    );
};

export default Products;
