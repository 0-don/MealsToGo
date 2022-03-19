import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RootStackParamList as RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { RootStackParamList as SettingsStackParamList } from "../../../infrastructure/navigation/settings.navigator";
import { FavouritesContext } from "../../../services/favorites/favourites.context";
import { RestaurantProps } from "../../../services/restaurants/types";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import * as S from "./favourites.styles";

type Favorites = RestaurantProps;

type FavouritesScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SettingsStackParamList, "Favourites">,
  StackNavigationProp<RestaurantsStackParamList>
>;

type FavouritesScreenProps = {
  navigation: FavouritesScreenNavigationProp;
};

export const FavouritesScreen = ({
  navigation,
}: FavouritesScreenProps): JSX.Element => {
  const { favourites } = useContext(FavouritesContext);

  const keyExtractor = (item: Favorites) => item.name;

  const renderItem = ({ item: restaurant }: { item: Favorites }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant,
          })
        }
      >
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard restaurant={restaurant} />
        </Spacer>
      </TouchableOpacity>
    );
  };

  return favourites.length ? (
    <SafeArea>
      <S.RestaurantList
        // @ts-ignore
        data={favourites}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeArea>
  ) : (
    <S.NoFavouritesArea>
      <Text variant="label">No favourites yet</Text>
    </S.NoFavouritesArea>
  );
};
