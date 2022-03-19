import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import CheckoutScreen from "../../features/checkout/screens/checkout.screen";

export type RootStackParamList = {
  Checkout: undefined;
  CheckoutSuccess: undefined;
  CheckoutError: { error: string };
};

const CheckoutStack = createStackNavigator<RootStackParamList>();

export const CheckoutNavigator = (): JSX.Element => (
  <CheckoutStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
