import React from "react";

const Categories = ({
  filterProducts,
  selectCat,
  categories,
  setselectCat,
}) => {
  const categoryHead = categories.map((cat, index) => {
    return (
        <button
          key={index}
          className={selectCat === index ? "active" : "non-active"}
          onClick={() => {
            filterProducts(cat);
            setselectCat(index);
          }}
        >
          {cat}
        </button>

      
    );
  });
  return <nav>{categoryHead}</nav>;
};

export default Categories;
