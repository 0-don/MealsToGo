import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

export type RootStackParamList = {
  Settings: undefined;
  Favourites: undefined;
  Camera: undefined;
};

const SettingsStack = createStackNavigator<RootStackParamList>();

export const SettingsNavigator = (): JSX.Element => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
