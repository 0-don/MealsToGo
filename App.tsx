import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth/react-native";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { auth } from "./src/config/firebase";
import { Navigation } from "./src/infrastructure/navigation";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import { FavouritesContextProvider } from "./src/services/favorites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "mo@binni.io", "test123")
  //       .then((user) => {
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.error(e);
  //       });
  //   }, 5000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
