import React, { createContext, useState, useEffect } from "react";
export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteItem, setFavoriteItem] = useState([]);
  const [urlFavorites, setUrlFavorites] = useState();

  useEffect(() => {
    setUrlFavorites(
      favoriteItem.map((item) => `https://fakestoreapi.com/products/${item.id}`)
    );
  }, [favoriteItem]);
  const addfavoriteItem = (id) => {
    setFavoriteItem((prevState) => [...prevState, id]);
  };

  const deleteFavoriteItem=(ID)=>{
    setFavoriteItem(favoriteItem.filter(element=>element.id!==ID.id))
  }

  return <FavoriteContext.Provider value={{favoriteItem,urlFavorites,addfavoriteItem,deleteFavoriteItem}}>
    {children}
  </FavoriteContext.Provider>
};
