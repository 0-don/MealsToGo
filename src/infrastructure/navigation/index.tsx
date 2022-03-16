import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  console.log(isAuthenticated, user);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <SafeArea>
          <Text>You are not authenticated</Text>
        </SafeArea>
      )}
    </NavigationContainer>
  );
};
