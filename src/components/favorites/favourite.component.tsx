import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { FavouritesContext } from "../../services/favorites/favourites.context";
import { RestaurantProps } from "../../services/restaurants/types";
import * as S from "./favourite.styles";

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
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </S.FavouriteButton>
  );
};
