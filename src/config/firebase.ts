import { getApps, initializeApp, getApp } from "firebase/app";
import {
  Auth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzCX17R_2-J55Gij9jF0BNlTDaCH8qnBo",
  authDomain: "mealstogo-450cd.firebaseapp.com",
  projectId: "mealstogo-450cd",
  storageBucket: "mealstogo-450cd.appspot.com",
  messagingSenderId: "173844787537",
  appId: "1:173844787537:web:6aebb5ab8fae223480a370",
  measurementId: "G-ZPQMWZ5VCV",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//@ts-ignore
const authProvider = app.container.getProvider("auth-exp");
export let auth: Auth;

if (authProvider.isInitialized()) {
  auth = authProvider.getImmediate();
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}
