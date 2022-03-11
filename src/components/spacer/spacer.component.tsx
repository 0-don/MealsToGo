import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (
  position: keyof typeof positionVariant,
  size: keyof typeof sizeVariant
) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${({ variant }) => variant};
`;

export const Spacer = ({
  position,
  size,
  children,
}: {
  position: keyof typeof positionVariant;
  size: keyof typeof sizeVariant;
  children: ReactNode;
}) => {
  useTheme();
  const variant = getVariant(position, size);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
