import React, { useCallback, useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import * as S from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { RootStackParamList } from "../../../infrastructure/navigation/account.navigator";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = ({ navigation }: LoginScreenProps): JSX.Element => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    onLogin(email, password);
  }, [email, password, onLogin]);

  return (
    <S.AccountBackground>
      <S.AccountCover />
      <S.Title>Meals To Go</S.Title>
      <S.AccountContainer>
        <S.AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete={false}
          onChangeText={(u: string) => setEmail(u)}
        />
        <Spacer size="large">
          <S.AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            autoComplete={false}
            onChangeText={(p: string) => setPassword(p)}
          />
        </Spacer>
        {!!error && (
          <S.ErrorContainer>
            <Text variant="error">{error}</Text>
          </S.ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <S.AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={handleLogin}
            >
              Login
            </S.AuthButton>
          ) : (
            <ActivityIndicator animating color={Colors.blue300} />
          )}
        </Spacer>
      </S.AccountContainer>
      <Spacer size="large">
        <S.AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </S.AuthButton>
      </Spacer>
    </S.AccountBackground>
  );
};
