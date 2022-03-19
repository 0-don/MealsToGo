import React from "react";
import { RouteProp } from "@react-navigation/native";

import { Text } from "../../../components/typography/text.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RootStackParamList } from "../../../infrastructure/navigation/checkout.navigator";
import { theme } from "../../../infrastructure/theme";

type CheckoutErrorScreenRouteProp = RouteProp<
  RootStackParamList,
  "CheckoutError"
>;

type Props = {
  route: CheckoutErrorScreenRouteProp;
};

export const CheckoutErrorScreen = ({ route }: Props): JSX.Element => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={theme.colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
