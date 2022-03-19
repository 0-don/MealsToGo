import {
  apiKey,
  appId,
  authDomain,
  messagingSenderId,
  projectId,
  storageBucket,
} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

console.log({
  apiKey,
  appId,
  authDomain,
  messagingSenderId,
  projectId,
  storageBucket,
})
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
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
