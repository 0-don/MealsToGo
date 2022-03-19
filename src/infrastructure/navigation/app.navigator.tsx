import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import { MapScreen } from "../../features/map/screens/map.screen";
import { CartContextProvider } from "../../services/cart/cart.context";
import { FavouritesContextProvider } from "../../services/favorites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { CheckoutNavigator } from "./checkout.navigator";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

export type TabIcon = {
  [key in
    | "Restaurants"
    | "Map"
    | "Setting"
    | "Checkout"]: keyof typeof Ionicons.glyphMap;
};

export type TabIconColor = {
  focused: boolean;
  color: string;
  size: number;
};

export type ScreenOption = {
  route: RouteProp<ParamListBase, string>;
};

export type RootBottomParamList = {
  Restaurants: undefined;
  Map: undefined;
  Setting: undefined;
  Checkout: undefined;
};

const Tab = createBottomTabNavigator();

const TAB_ICON: TabIcon = {
  Checkout: "md-cart",
  Restaurants: "md-restaurant",
  Map: "md-map",
  Setting: "md-settings",
};

const createScreenOptions = ({ route }: ScreenOption) => ({
  tabBarIcon: ({ color, size }: TabIconColor) => (
    <Ionicons
      name={TAB_ICON[route.name as keyof typeof TAB_ICON]}
      size={size}
      color={color}
    />
  ),
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Setting" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
