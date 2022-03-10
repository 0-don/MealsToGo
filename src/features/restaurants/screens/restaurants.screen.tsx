import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            {/* @ts-ignore  */}
            <Searchbar />
        </View>
        <View style={styles.list}>
            <RestaurantInfoCard restaurant={{}} />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight },
    search: { padding: 16 },
    list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
