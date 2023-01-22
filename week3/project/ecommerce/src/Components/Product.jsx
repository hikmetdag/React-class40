import React from "react";
import { Link } from "react-router-dom";

const Product = ({ filter }) => {
  return (
    <div className="products">
      {filter.map((product) => {
        return (
          <Link
            className="product"
            key={product.id}
            to={`/product/${product.id}`}
          >
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
