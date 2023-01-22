import React, { createContext, useState } from "react";

export const FavoriteProductContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState();

  const addFavorite=(favorite)=>{
    setFavoriteProducts(...favoriteProducts,favorite)
  }

  const removeFavorite=(id)=>{
    setFavoriteProducts(favoriteProducts.filter(item=>item.id=id))
  }
  return(
    <FavoriteProductContext.Provider value={{removeFavorite,addFavorite,favoriteProducts}}>
        {children}
    </FavoriteProductContext.Provider>
  )
};


