import React, { useContext } from "react";
import { FavoriteContext } from "../context/Favoritescontex";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const FavoriteIcon = ({product}) => {
  const { favoriteItem,addfavoriteItem, deleteFavoriteItem } =
    useContext(FavoriteContext);

    const favoritedProduct = (id) => {
        return favoriteItem.some((product) => product.id=== id);
      };
  return( <div className="fav-icon ">
  {favoritedProduct(product.id) ? (
    <img
      src={heartSolid}
      alt="favorite-icon"
      onClick={() => {
        deleteFavoriteItem(product);
      }}
    />
  ) : (
    <img
      src={heartRegular}
      alt="favorite-icon"
      onClick={() => {
        addfavoriteItem(product);
      }}
    />
  )}
</div>) ;
};

export default FavoriteIcon;
