import React, { useContext, useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./favourite.styles";

import { RestaurantProps } from "../../services/restaurants/types";
import { Platform } from "react-native";
import { FavouritesContext } from "../../services/favorites/favourites.context";

type FavouriteProps = {
  restaurant: RestaurantProps;
};

export const Favourite = ({ restaurant }: FavouriteProps): JSX.Element => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = useMemo(() => {
    return favourites.find((r) => r.placeId === restaurant.placeId);
  }, [favourites, restaurant.placeId]);

  return (
    <S.FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
      style={{ elevation: Platform.OS === "android" ? 50 : 0 }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </S.FavouriteButton>
  );
};
