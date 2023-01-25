import React, { useEffect, useState } from "react";
import Error from "./Error";
import { useParams } from "react-router-dom";
import Header from "./Header";
import FavoriteIcon from "./FavoriteIcon";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (error) return <Error error={error} />;
  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <Header />
      <div className="productDeatail">
        <h4>{data.title}</h4>
        <div className="fav-icon-detail">
          <img src={data.image} alt={data.id} />
          <FavoriteIcon product={data} />
        </div>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default ProductDetail;
