import React, { useEffect, useState } from "react";
import Error from "./Error";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data = await response.json();
        setProduct(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, [id]);

  if (error) return <Error />;

  if (loading) return <h2>Loading...</h2>;
  else
    return (
      <div className="productDeatail">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.id} />

        <p>{product.description}</p>
      </div>
    );
};

export default ProductDetail;
