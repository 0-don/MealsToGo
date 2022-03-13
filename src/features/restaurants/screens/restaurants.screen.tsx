import React, { useContext } from "react";
import { FlatList, StatusBar } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantProps } from "../../../services/restaurants/types";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        {/* @ts-ignore  */}
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        // @ts-ignore
        keyExtractor={(item: RestaurantProps) => item.name}
        data={restaurants}
        renderItem={({ item }: { item: RestaurantProps }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};
