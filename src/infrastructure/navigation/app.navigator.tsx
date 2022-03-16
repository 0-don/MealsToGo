import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export type TabIcon = {
  [key in "Restaurants" | "Map" | "Settings"]: keyof typeof Ionicons.glyphMap;
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
  Settings: undefined;
  Checkout: undefined;
};

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON: TabIcon = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
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
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
