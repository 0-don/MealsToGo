import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ThemeType } from "../../../infrastructure/theme";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const Search = styled.View<ThemeType>`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.View<ThemeType>`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => (
  <Container>
    <Search>
      {/* @ts-ignore  */}
      <Searchbar />
    </Search>
    <List>
      <RestaurantInfoCard
        restaurant={{
          name: "Some Restaurant",
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
          photos: [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          ],
          address: "100 some random street",
          isOpenNow: true,
          rating: 4,
          isClosedTemporarily: true,
        }}
      />
    </List>
  </Container>
);
