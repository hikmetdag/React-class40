import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Error from "./Error";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [categories, setCategories] = useState([]);
  const [selectCat, setselectCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function getProducts() {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();

        setData(data);
        setFilter(data);
        setLoading(false);
      }
      getProducts();
    } catch (err) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      async function getCategories() {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        const data = await response.json();

        setCategories(data);
        setLoading(false);
      }
      getCategories();
    } catch (err) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  const filterProducts = (cat) => {
    const productList = data.filter((element) => element.category === cat);
    setFilter(productList);
  };

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <Error error={error} />
  ): (
    <>
      <h1>Products</h1>

      <Categories
        categories={categories}
        setCategories={setCategories}
        filterProducts={filterProducts}
        selectCat={selectCat}
        setselectCat={setselectCat}
      />
      <Product filter={filter} />
    </>
  );
};

export default Products;
