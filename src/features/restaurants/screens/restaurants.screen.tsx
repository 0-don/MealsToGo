import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px; 
`;

const Search = styled.View`
    padding: 16px;
`;

const List = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue; 
`;

export const RestaurantScreen = () => (
    <Container>
        <Search>
            {/* @ts-ignore  */}
            <Searchbar />
        </Search>
        <List>
            <RestaurantInfoCard restaurant={{}} />
        </List>
    </Container>
);
