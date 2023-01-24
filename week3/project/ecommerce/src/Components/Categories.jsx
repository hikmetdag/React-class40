import { useState } from "react";
import Error from "./Error";
import useFetch from "../hooks/useFetch";

const Categories = ({ filterProducts }) => {
  const [selectCat, setSelectCat] = useState([]);

  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <Error error={error} />;
  return (
    <nav>
      {data.map((cat, index) => {
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
