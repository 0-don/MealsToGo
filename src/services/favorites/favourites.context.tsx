import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import { RestaurantProps } from "../restaurants/types";

type Favorites = RestaurantProps;

type FavouritesContextData = {
  favourites: Favorites[];
  addToFavourites: (restaurant: RestaurantProps) => void;
  removeFromFavourites: (restaurant: RestaurantProps) => void;
};

type Props = {
  children: React.ReactNode;
};

export const FavouritesContext = createContext<FavouritesContextData>(
  {} as FavouritesContextData
);

const STORAGE_FAVOURITES = "@favourites";

export const FavouritesContextProvider = ({ children }: Props): JSX.Element => {
  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState<Favorites[]>([]);

  const saveFavourites = async (value: Favorites[], uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${STORAGE_FAVOURITES}-${uid}`, jsonValue);
    } catch (e) {
      console.error("error storing", e);
    }
  };

  const loadFavourites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`${STORAGE_FAVOURITES}-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.error("error loading", e);
    }
  };

  const add = (restaurant: RestaurantProps) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: RestaurantProps) => {
    const newFavourites = favourites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
