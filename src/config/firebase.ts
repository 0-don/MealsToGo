import { getApps, initializeApp, getApp } from "firebase/app";
import {
  Auth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnEPl1QI-3nZURQck7sqoXKO1ouDmMqco",
  authDomain: "mealstogo-ee48c.firebaseapp.com",
  projectId: "mealstogo-ee48c",
  storageBucket: "mealstogo-ee48c.appspot.com",
  messagingSenderId: "761921617460",
  appId: "1:761921617460:web:9709f105f828a197b8d461"
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
