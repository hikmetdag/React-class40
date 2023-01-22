import React, { useEffect, useState } from "react";
import Error from "./Error";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <Error />;
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
