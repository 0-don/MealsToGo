import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    background-color: white;
`;

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://raw.githubusercontent.com/Don-Cryptus/DiscordCustomUrlSniper/master/images/discord-sniper.png",
        ],
        address = "100 some random street",
        openingHours = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
