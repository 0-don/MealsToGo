import {
  createUserWithEmailAndPassword,
  User
} from "firebase/auth/react-native";
import React, { createContext, useCallback, useState } from "react";
import { auth } from "../../config/firebase";
import { loginRequest } from "./authentication.service";

export type UserProps = User; // | auth.UserCredential;

type AuthenticationContextData = {
  isAuthenticated: boolean;
  user: UserProps;
  isLoading: boolean;
  error: string;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
};

type AuthenticationProviderProps = {
  children: React.ReactNode;
};

export const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData
);

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserProps>({} as UserProps);

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = useCallback((email: string, password: string): void => {
    setIsLoading(true);

    loginRequest(email, password)
      .then(({ user: usr }) => {
        setUser(usr);
        setError("");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  }, []);

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string
  ): void => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: usr }) => {
        setUser(usr);
        setError("");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser({} as UserProps);
      setError("");
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!Object.keys(user).length,
        user,
        isLoading,
        error,
        onLogin,
        onLogout,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
