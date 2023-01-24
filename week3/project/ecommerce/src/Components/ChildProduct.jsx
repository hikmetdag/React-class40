import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const ChildProduct = ({ product }) => {
  return (
    <div className="product" >
      <div className="fav-icon-detail">
        <Link key={product.id} to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </Link>
        <FavoriteIcon product={product} />
      </div>
    </div>
  );
};

export default ChildProduct;
