import React, { useContext } from "react";
import { FavoriteContext } from "../context/Favoritescontex";
import ChildProduct from "./ChildProduct";
import Header from "./Header";
import useFetchFavoriteUrls from "../hooks/useFetchFavoriteUrls";
import Error from "./Error";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const Favorites = () => {
  const { urlFavorites } = useContext(FavoriteContext);
  const { data, loading, error } = useFetchFavoriteUrls(urlFavorites);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <Header />
      <h1>Favourites</h1>
      <div className="products">
        {data.length !== 0 ? (
          data.map((product, index) => {
            return <ChildProduct key={index} product={product} />;
          })
        ) : (
          <p>You haven't chosen any favorites yet!</p>
        )}
      </div>
    </>
  );
};

export default Favorites;
