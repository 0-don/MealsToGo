import React, { useEffect, useState } from "react";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { FavouritesContextProvider } from "./src/services/favorites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyCzCX17R_2-J55Gij9jF0BNlTDaCH8qnBo",
  authDomain: "mealstogo-450cd.firebaseapp.com",
  projectId: "mealstogo-450cd",
  storageBucket: "mealstogo-450cd.appspot.com",
  messagingSenderId: "173844787537",
  appId: "1:173844787537:web:6aebb5ab8fae223480a370",
  measurementId: "G-ZPQMWZ5VCV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "<email>", "<password>")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.error(e);
        });
    }, 5000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
