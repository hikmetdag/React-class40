import React, { useEffect, useState } from "react";
import Error from "./Error";

const Categories = ({ filterProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };
    getCategories();
  }, []);

  if (error) return <Error />;

  if (loading) return <h2>Loading...</h2>;
  else
    return (
      <nav>
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              className={selectCat === index ? "active" : "non-active"}
              onClick={() => {
                filterProducts(cat);
                setSelectCat(index);
              }}
            >
              {cat}
            </button>
          );
        })}
      </nav>
    );
};

export default Categories;
