import {
    createStackNavigator,
    TransitionPresets
} from "@react-navigation/stack";
import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantProps } from "../../services/restaurants/types";

export type RootStackParamList = {
  RestaurantsView: undefined;
  RestaurantDetail: { restaurant: RestaurantProps };
};

const RestaurantStack = createStackNavigator<RootStackParamList>();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsView"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
