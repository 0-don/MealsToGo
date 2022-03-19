import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { RootStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { RestaurantProps } from "../../../services/restaurants/types";
import CompactRestaurantInfo from "../../restaurant/compact-restaurant-info.component";
import { Spacer } from "../../spacer/spacer.component";
import * as S from "./styles";

type FavouritesBarProps = {
  favourites: RestaurantProps[];
  onNavigate: (
    key: string,
    params?: RootStackParamList["RestaurantDetail"]
  ) => void;
};

const FavouritesBar = ({
  favourites,
  onNavigate,
}: FavouritesBarProps): JSX.Element | null => {
  if (!favourites.length) {
    return null;
  }
  return (
    <S.FavouritesWrapper elevation={3}>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </S.FavouritesWrapper>
  );
};

export default FavouritesBar;
