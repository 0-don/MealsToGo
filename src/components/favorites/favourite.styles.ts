import { Platform } from "react-native";
import styled from "styled-components/native";

export const FavouriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 99999;
  elevation: ${Platform.OS === "android" ? 50 : 0};
`;
