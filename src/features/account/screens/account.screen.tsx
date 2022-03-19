import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import React from "react";
import lottie from "../../../../assets/watermelon.json";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RootStackParamList } from "../../../infrastructure/navigation/account.navigator";
import * as S from "../components/account.styles";

type AccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Main"
>;

type AccountScreenProps = {
  navigation: AccountScreenNavigationProp;
};

export const AccountScreen = ({
  navigation,
}: AccountScreenProps): JSX.Element => {
  return (
    <S.AccountBackground>
      <S.AccountCover />
      <S.AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={lottie as unknown as string}
        />
      </S.AnimationWrapper>
      <S.Title>Meals To Go</S.Title>
      <S.AccountContainer>
        <S.AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </S.AuthButton>
        <Spacer size="large">
          <S.AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </S.AuthButton>
        </Spacer>
      </S.AccountContainer>
    </S.AccountBackground>
  );
};
