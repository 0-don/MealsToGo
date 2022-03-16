import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { FlatList, Pressable, StatusBar, Platform } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { Favourite } from "../../../components/favorites/favourite.component";
import FavouritesBar from "../../../components/favorites/favouriteBar";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RootStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { FavouritesContext } from "../../../services/favorites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantProps } from "../../../services/restaurants/types";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
  
`;

export const RestaurantList = styled(
  FlatList as new () => FlatList<RestaurantProps>
).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

type RestaurantsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RestaurantsView"
>;

type RestaurantsScreenProps = {
  navigation: RestaurantsScreenNavigationProp;
};

export const RestaurantsScreen = ({
  navigation,
}: RestaurantsScreenProps): JSX.Element => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={
            navigation.navigate as unknown as (
              key: string,
              params?: RootStackParamList["RestaurantDetail"]
            ) => void
          }
        />
      )}
      <RestaurantList
        // @ts-ignore
        keyExtractor={(item: RestaurantProps) => item.name}
        data={restaurants}
        renderItem={({ item }: { item: RestaurantProps }) => (
          <>
            <Favourite restaurant={item} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        )}
      />
    </SafeArea>
  );
};
