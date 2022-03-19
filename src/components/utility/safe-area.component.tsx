import { StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    background-color: ${theme.colors.bg.primary};
  `}
`;
