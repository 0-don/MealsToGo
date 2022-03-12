import React from "react";
import { FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import {
  Restaurant,
  RestaurantInfoCard,
} from "../components/restaurant-info-card.component";
import { data } from "./data";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs<FlatList<Restaurant>, any>({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      {/* @ts-ignore  */}
      <Searchbar />
    </SearchContainer>

    <RestaurantList
      keyExtractor={(item: Restaurant) => item.name}
      data={data}
      renderItem={({ item }: { item: Restaurant }) => (
        <RestaurantInfoCard restaurant={item} />
      )}
    />
  </SafeArea>
);
