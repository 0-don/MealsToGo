import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover
                key={name}
                style={styles.cover}
                source={{ uri: photos[0] }}
            />
            <Title>{name}</Title>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
});
