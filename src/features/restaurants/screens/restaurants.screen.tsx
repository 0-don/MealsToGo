import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import { FlatList, Pressable, StatusBar } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
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
  const { favorites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />

      <RestaurantList
        // @ts-ignore
        keyExtractor={(item: RestaurantProps) => item.name}
        data={restaurants}
        renderItem={({ item }: { item: RestaurantProps }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};
